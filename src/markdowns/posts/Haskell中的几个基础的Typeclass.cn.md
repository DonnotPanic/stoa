+++
date = "2020-06-12"
title = "Haskell中的几个基础的Typeclass"
katex = "true"
series = ["Haskell","programming"]
+++


讲一些简单的东西，安利更多人打破内心的恐惧入坑 Haskell > w <

首先什么是Typeclass呢，其实没必要讲的那么玄乎，那么抽象，Typeclass 无非是 type 级别的约束，所有的 Typeclass 里的 type 必须实现 Typeclass 中函数并保证满足这些函数应有的性质，可以打个比方，就是数学中所说的满足 xx 性质。但是具体来说是不是真的满足这些性质呢，实际上是我们，programmer 应该考虑的问题。有了 Typeclass 的约束，就满足了对应的性质，因而我们就可以自由的按照我们的想法去进行操作了。

Haskell 中用 `class` 关键词定义 Typeclass， 而与之相对的，满足 Typeclass 约束的某个具体的类型，用 `instance` 关键词去实现 Typeclass中定义的函数。

> 注：以下不会区分函数和 operator， 统一用函数表示。

举一个简单的例子：

## Eq

`Eq` Typeclass 描述了该类型上存在等价关系（自反，对称，传递） `=`， 同时满足**Substitutivity** 和 **Negation**：

```haskell
-- Reflexivity
(x == x) = True
-- Symmetry
(x == y) = (y == x)
-- Transitivity
if ((x == y) && (y == z)) = True, then (x == z) = True
-- Substitutivity
-- f 返回一个 Eq typeclass 约束的 instance
if (x == y) = True then (f x == f y) = True
-- Negation
x /= y = not (x == y)
```

Eq 的具体定义在 GHC.Classes中

```haskell
-- GHC.Classes
-- Eq a 接受一个任意的参数 a 代表实现了 Eq instance 的类型
class  Eq a  where
    (==), (/=)           :: a -> a -> Bool
    {-# INLINE (/=) #-} -- 这个 pragma 是告诉编译器 (/=) 可以被 inline 优化
    {-# INLINE (==) #-} -- 同上
    x /= y               = not (x == y)
    x == y               = not (x /= y)
    {-# MINIMAL (==) | (/=) #-} 
    -- minimal progma 描述的函数必须在 instance中定义，即需要定义 (==) 或 (/=)。
    
-- 这里是将单一类型的 Eq instance 扩展到多元组上
deriving instance Eq ()
deriving instance (Eq  a, Eq  b) => Eq  (a, b)
deriving instance (Eq  a, Eq  b, Eq  c) => Eq  (a, b, c)
-- 后面的省略了
```

可以看到 Eq instance 只是描述了 `(==)` 和 `(/=)` 两个函数，但是对于具体定义是否满足性质是不做要求的。让我们看一眼 `Char` 是怎么实现 Eq 的。

```haskell
-- GHC.Classes
instance Eq Char where
    (==) = eqChar
    (/=) = neChar

-- See GHC.Classes#matching_overloaded_methods_in_rules
{-# INLINE [1] eqChar #-}
{-# INLINE [1] neChar #-}
eqChar, neChar :: Char -> Char -> Bool
(C# x) `eqChar` (C# y) = isTrue# (x `eqChar#` y)
(C# x) `neChar` (C# y) = isTrue# (x `neChar#` y)
```

因为不想涉及底层，所以我们只是粗略的看看 instance 的用法。一旦我们实现了 `Eq Char`，则我们可以对 `Char` 类型进行判断相等，当我们设计任何需要 Eq 约束的类型实现的函数时，我们都可以代入 `Char`。注，Haskell 里 `“abc”` 和 `['a','b','c']` 是等价的

```haskell
foo :: (Eq a) => [a] -> Bool
foo xs = foldl (&&) True $ zipWith (==) xs $ reverse xs

foo "abcdcba" -- True
foo "aac" -- False
```

## Ord

详细的讲完了 Eq，相信大家对于 Haskell 里的 Typeclass，以及 `class` 和 `instance`	关键词都有所了解，那我们就快速过一遍 Ord。

```haskell
-- GHC.Classes
class  (Eq a) => Ord a  where
    compare              :: a -> a -> Ordering
    (<), (<=), (>), (>=) :: a -> a -> Bool
    max, min             :: a -> a -> a

    compare x y = if x == y then EQ
                  -- NB: must be '<=' not '<' to validate the
                  -- above claim about the minimal things that
                  -- can be defined for an instance of Ord:
                  else if x <= y then LT
                  else GT

    x <  y = case compare x y of { LT -> True;  _ -> False }
    x <= y = case compare x y of { GT -> False; _ -> True }
    x >  y = case compare x y of { GT -> True;  _ -> False }
    x >= y = case compare x y of { LT -> False; _ -> True }

        -- These two default methods use '<=' rather than 'compare'
        -- because the latter is often more expensive
    max x y = if x <= y then y else x
    min x y = if x <= y then x else y
    {-# MINIMAL compare | (<=) #-}

deriving instance Ord ()
deriving instance (Ord a, Ord b) => Ord (a, b)
-- 后续省略
```

注意到类型 a 必须首先满足 Eq 的约束，即必须拥有 (==) 和 (/=) 才能有 Ord。换言之，如果一个类型满足 Ord，那它必然也满足 Eq。这有点类似面向对象中类的继承。

## Functor

讲了几个平凡的例子，接下来让我们讲些真正有趣的东西吧。

首先我们得理解，什么是范畴，一个范畴可以理解为一种对环的概念的扩展。范畴是由对象Object （以下简记 Obj）和对象间的映射 Morphism （以下简记Mor）构成的二元组。

Functor 即是函子，一个从范畴 *$C$* 到范畴 *$D$* 的函子 *$F$* 的作用是将 $c \in Obj(C)$ 映射到 $F(c)\in Obj(D)$。同时将 $f:x\to y \in Mor(C)$ 映射到 $F(f):F(x)\to F(y)\in Mor(D)$ 并保证：
$$
F(g∘f) = F(g)∘F(f)\\
F(1_x) = 1_{F(x)}
$$
数学上的定义很好理解，当然实际上的程序定义同样如此：

```Haskell
-- GHC.Base
class  Functor f  where
    -- | Using @ApplicativeDo@: \'@'fmap' f as@\' can be understood as
    -- the @do@ expression
    --
    -- @
    -- do a <- as
    --    pure (f a)
    -- @
    --
    -- with an inferred @Functor@ constraint.
    fmap        :: (a -> b) -> f a -> f b
    -- | Replace all locations in the input with the same value.
    -- The default definition is @'fmap' . 'const'@, but this may be
    -- overridden with a more efficient version.
    --
    -- Using @ApplicativeDo@: \'@a '<$' bs@\' can be understood as the
    -- @do@ expression
    --
    -- @
    -- do bs
    --    pure a
    -- @
    --
    -- with an inferred @Functor@ constraint.
    (<$)        :: a -> f b -> f a
    (<$)        =  fmap . const
```

抛开 do 的语法糖，我们注意到一个 Functor f 只需要定义一个函数，即 `fmap` 对应上述数学式中函子 $F$ 对 morphism 的映射。

`(<$)` 实际上已经给出，通过类型我们也可以明白它的功能。什么，你说你不明白，那换成非 point-free的形式：

```haskell
-- fmap :: (a -> b) -> f a -> f b
-- const :: b -> (a -> b)
(<$) :: b -> f a -> f b
(<$) b fa = fmap (const b) fa
```

很显然，这个函数负责由 $b\in Obj(C)$ 和 $F(a)\in Obj(D)$ 确定 $F(b) \in Obj(D)$。实际使用中相当于某种替换。

我们可以注意到 f a 似乎是某种新的类型，如果 a 类比某个值，那么 f a 明显是一个函数。而我们并不知道 f a 到底是什么值，只知道它是某个值。

实际上 f 是 Inductive Type，我们不需要深入理解， 知道它的数学对应——functor，就足够了。

## Applicative

applicative functor 是一个在编程中非常有用的函子，让我们看看源码：

> 有删减

```haskell
-- GHC.Base
class Functor f => Applicative f where
    {-# MINIMAL pure, ((<*>) | liftA2) #-}
    -- | Lift a value.
    pure :: a -> f a

    -- | Sequential application.
    (<*>) :: f (a -> b) -> f a -> f b
    (<*>) = liftA2 id

    -- | Lift a binary function to actions.
    liftA2 :: (a -> b -> c) -> f a -> f b -> f c
    liftA2 f x = (<*>) (fmap f x)

    -- | Sequence actions, discarding the value of the first argument.
    (*>) :: f a -> f b -> f b
    a1 *> a2 = (id <$ a1) <*> a2
    
    (<*) :: f a -> f b -> f a
    (<*) = liftA2 const


(<**>) :: Applicative f => f a -> f (a -> b) -> f b
(<**>) = liftA2 (\a f -> f a)

-- with an inferred @Functor@ constraint, weaker than @Applicative@.
liftA :: Applicative f => (a -> b) -> f a -> f b
liftA f a = pure f <*> a
-- Caution: since this may be used for `fmap`, we can't use the obvious
-- definition of liftA = fmap.
liftA3 :: Applicative f => (a -> b -> c -> d) -> f a -> f b -> f c -> f d
liftA3 f a b c = liftA2 f a b <*> c
```

我们不考虑do notation 和更详细的 progma，所以只摘录了部分必要的内容。

我们不需要被这一长串吓到，实际上我们只需要定义 Applicative functor 中的两个函数，pure 和 <*> | liftA2 之一。

虽然从数学的角度，不在 Funtor 而在 Applicative 定义有点怪怪的，不过既然这是 programming，那就不要谈那么多数学。

类型其实已经帮助我们说明了大部分问题。

`pure` 无非是定义一个从 a lift到 f a 的方法，或者说 $c \in Obj(C)$ 映射到 $F(c)\in Obj(D)$。
`<*>` 是 sequential application，更数学的看法是其实它对应着 $f:x\to y \in Mor(C)$ 到 $F(f):F(x)\to F(y)\in Mor(D)$ 的映射。
`liftA2` 是一个二元函数，是 `<*>` 的二维形式。·

显然 `liftA2 ` 和 `<*>` 可以互相转换

```haskell
(<*>) :: f (b -> c) -> f b -> f c
(<*>) = liftA2 id 
-- 令 a = b -> c 显然有 id = ((b->c) -> (b->c)) , f a = f (b -> c)

liftA2 :: (a -> b -> c) -> f a -> f b -> f c
liftA2 f x = (<*>) (fmap f x)
-- f :: (a -> b -> c), x :: f a
-- fmap :: (a -> b -> c) -> f a -> f (b -> c) 
-- 相当于先处理第一个参数，再对后面的参数进行sequential application
```

`*>` 的定义看起来晕晕的，但经过代换你会发现实际上：

```haskell
(*>) = liftA2 (flip const)
(*>) = flip (<*)
```

而 `<*` 和 functor 中的定义是一回事。之所以写这么绕是优化上的事，所以暂且不管它。
`liftA` 和 `fmap` 和 `<*>` 都是一回事。为什么要拆成那么多，一部分是历史包袱，一部分我也不知道，不过能用 `fmap` 就少用 `<*>`。
`liftA3` 是三元函数，不想多赘述了，具体分析思路见上。

## Monad

数学部分我都讲烂了，不会还有人不懂吧。

直接讲源码。

> 有删改

```haskell
class Applicative m => Monad m where
    -- | Sequentially compose two actions, passing any value produced
    (>>=)       :: forall a b. m a -> (a -> m b) -> m b

    -- | Sequentially compose two actions, discarding any value produced
    -- by the first, like sequencing operators (such as the semicolon)
    -- in imperative languages.
    (>>)        :: forall a b. m a -> m b -> m b
    m >> k = m >>= \_ -> k 
    {-# INLINE (>>) #-}

    -- | Inject a value into the monadic type.
    return      :: a -> m a
    return      = pure

-- | Same as '>>=', but with the arguments interchanged.
{-# SPECIALISE (=<<) :: (a -> [b]) -> [a] -> [b] #-}
(=<<)           :: Monad m => (a -> m b) -> m a -> m b
f =<< x         = x >>= f

-- | Conditional execution of 'Applicative' expressions. For example,
when      :: (Applicative f) => Bool -> f () -> f ()
{-# INLINABLE when #-}
{-# SPECIALISE when :: Bool -> IO () -> IO () #-}
{-# SPECIALISE when :: Bool -> Maybe () -> Maybe () #-}
when p s  = if p then s else pure ()

-- | Evaluate each action in the sequence from left to right,
-- and collect the results.
sequence :: Monad m => [m a] -> m [a]
{-# INLINE sequence #-}
sequence = mapM id
-- Note: [sequence and mapM]

-- | @'mapM' f@ is equivalent to @'sequence' . 'map' f@.
mapM :: Monad m => (a -> m b) -> [a] -> m [b]
{-# INLINE mapM #-}
mapM f as = foldr k (return []) as
            where
              k a r = do { x <- f a; xs <- r; return (x:xs) }

-- | Promote a function to a monad.
liftM   :: (Monad m) => (a1 -> r) -> m a1 -> m r
liftM f m1              = do { x1 <- m1; return (f x1) }

liftM2  :: (Monad m) => (a1 -> a2 -> r) -> m a1 -> m a2 -> m r
liftM2 f m1 m2          = do { x1 <- m1; x2 <- m2; return (f x1 x2) }

liftM3  :: (Monad m) => (a1 -> a2 -> a3 -> r) -> m a1 -> m a2 -> m a3 -> m r
liftM3 f m1 m2 m3       = do { x1 <- m1; x2 <- m2; x3 <- m3; return (f x1 x2 x3) }
-- 省略

ap                :: (Monad m) => m (a -> b) -> m a -> m b
ap m1 m2          = do { x1 <- m1; x2 <- m2; return (x1 x2) }

join              :: (Monad m) => m (m a) -> m a
join x            =  x >>= id
```

`>>=` 就是从左到右 $T\times T\to T$ 的combine，类型看起来有点怪哈，那我来解释一下：

```haskell
(>=>) :: (a -> m b) -> (b -> m c) -> (a -> m c)
(\x -> f x) >=> (\y -> g y) = (\x -> h x)
(>>=) :: m b -> (b -> m c) -> m c
(\x -> f x >>= (\y -> g y)) = (\x -> h x)
```

这样能少写 lambda 表达式，程序员都是懒狗。
`(=<<)` 就是反过来。
`mapM` 的作用无非是 monadic 的 `map` (a -> b) -> [a] -> [b]
`join` 的作用是为了把 $T (Tx)$ 变为 $Tx$，做法是直接返回内部的量。举个例子。

```haskell
join [[1,2,3],[4,5,6]] -- [1,2,3,4,5,6]
join (Just Nothing) -- Nothing
```

`ap` 就是 `<*>`。
`liftM_` 就是 `liftA_` 的 monad 对应。

## 应用

让我们看一个实际的例子：

```haskell
instance Functor ((->) r) where
	fmap = (.)
	
instance Applicative ((->) r) where
  pure = const
  (<*>) f g x = f x (g x) -- 如果你还对 SKI 组合子有印象的话 ；）
  liftA2 q f g x = q (f x) (g x) 
  
instance Monad ((->) r) where
  f >>= k = \r -> k (f r) r
```

还记得我在 SKI 组合子里说过的东西吗，为什么 S 可以用 <*> 替代。实际上在箭头范畴中出现了满满的即视感有木有？

好啦，让我们理解一下，什么是箭头范畴呢。

```haskell
-- fmap :: (a -> b) -> m a -> m b
fmap x y = (.) x y
-- x :: (a -> b), y :: (r -> a)
-- fmap :: (a -> b) -> (r -> a) -> (r -> b)
-- fmap :: (a -> b) -> ((->) r) a -> ((->) r) b

-- pure :: a -> m a
pure k = const k = (\r -> k)
-- k :: a, pure :: a -> r -> a
-- pure :: a -> ((->) r) a

-- (<*>) :: f (a -> b) -> f a -> f b
(<*>) f g x = f x (g x)
-- x :: r, g :: r -> a, f :: r -> a -> b
-- (<*>) :: (r -> a -> b) -> (r -> a) -> r -> b
-- (<*>) :: ((->) r) (a -> b) -> ((->) r) a -> ((->) r) b

-- (>>=) :: m a -> (a -> m b) -> m b
f >>= k = \r -> k (f r) r
-- f :: r -> a, k :: a -> r -> b
-- (>>=) :: r -> a -> a -> r -> b -> r -> b
-- (>>=) :: ((->) r) a -> (a -> ((->) r) b) -> ((->) r) b
```

有没有发现就是我们之前谈论的 SK 组合子，原来它也是monadic 的呀。

是不是很神奇，是不是很好玩。www

所以快来一起学 Haskell 吧。