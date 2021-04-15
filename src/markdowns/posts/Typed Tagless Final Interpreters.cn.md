+++
date = "2020-05-04"
title = "Typed Tagless Final Interpreters"
katex = true
series = ["Haskell","programming"]
+++


> 来了，那么这一次，我们来整Typed Tagless Final Interpreters
>
> 懂英语的筒子可以直接看这里：[Typed Tagless-Final Interpretation: Introductory Course](http://okmij.org/ftp/tagless-final/course/)
>
> 实现约定，文中所有data type用大写字母开头，普通函数用小写字母。

首先解释一下题目，明眼人都看得出，这个标题由4个单词组成 **[`Typed` , `Tagless` , `Final` , `Interpreters`]** ，说明什么呢？说明我们这个blog就讲这四块，咱们先得从Interpreters 讲起。

说到这个Interpreter，看过编译原理的小伙伴们开始高兴了，诶呀这题我会，这不就是写parser嘛，我老parser机器人了，手写AST(Abstract Syntax Tree)不在话下。好，到这一步的小伙伴都可以竖起耳朵狸，本文的受众就是你萌w。

为什么说 Parser 不一定依赖 AST 呢，当然，AST 确实是一种看法，具体的来说把 data type 看作 AST 然后通过 interpreter 去 recessively deconstruct，这是一种从顶向下的看法，或者说，**initial** 的看法。与之相对的有一种叫 **final** 的看法，试图从底向上，从 `eliminator` (从没听过这个词？没关系，它就是 `constructor` 的对偶概念，看到后面就懂了) 的组合的角度设计 Interpreter。

当然首先，我们得从 Initial Interpreter 讲起。

## Interpreter in the Initial Approach

之前说大家都写 AST 当然是调侃，其实大家不一定需要会写，本文所需求的计算机基础是很低的，*与之相对的是不会讲得很深:-)* 。不过最好懂一点 **Haskell** ，不用多，掌握 pattern match 和列表操作就够了。这里给两个推荐 [real world haskell](http://book.realworldhaskell.org/) 以及 [Write Yourself a Scheme in 48 Hours](https://en.wikibooks.org/wiki/Write_Yourself_a_Scheme_in_48_Hours) ，如果想进一步了解这个语言的话建议阅读。

进入正题，从 **initial** 的角度分析，AST 的节点实际上就对应一个 ADT(Algebraic Data Type) ，在 Haskell 里面写 ADT 是一件很简单的事情：

```haskell
-- 一个简单的加减法运算表达式类型
data Exp = Lit Int
         | Neg Exp
         | Add Exp Exp
```

> 如果你不知道 ADT 是什么也没关系，你可以想象一下BNF。

可以看到 `Lit Int` 是 variable with type `Int`，而后所有的 op 都可以看作由 Exp 的特定封装。实际上这也很好理解，AST 中m个孩子的 op 节点对应 $\mathtt{op}:\mathtt{Exp^m}\rightarrow \mathtt{Exp}$。酷，我们发现了一个 AST 的节点就是这样的 ADT 的一个 value。擅长举一反三的童鞋可能立刻想到，我们的 variable 不一定是 Int 啊，什么类型都可以，比如：

```haskell
-- 看起来似乎没什么问题，然而真的如此吗？
data Exp = Lit Float
         | Lit Int
         | Add Exp Exp
```

细心的童鞋可能会想到，Float 对应的 Add 和 Int 对应的 Add 其实是不一样的，而且 Float 和 Int 不能直接做加法，是的，为了保证操作的合法性，就需要引入更多的 Type System 的理论了，但是让我们先放慢脚步，从基础的 unitype 开始，我们只考虑 Int。

考虑一个任意的加减法表达式 $8-(1+2)$ ，我们用加上相反数来替代减法 $8 + (-(1+2))$ ,用波兰式表示 $(+ 8\quad (-\quad (+\quad 1\quad 2)))$ 并加上类型封装：

```haskell
ti1 = Add (Lit 8) (Neg (Add (Lit 1) (Lit 2)))
```

实际上我们要写的 Interpreter 就是能求对上述类型进行分解求值，就是这样一个`eliminator` 。

```haskell
eval :: Exp -> Int  -- 函数的类型签名
eval (Lit n) = n
eval (Neg e) = - eval e
eval (Add e1 e2) = eval e1 + eval e2

ti1_eval = eval ti1 -- 5
```

实际上 Interpreter 是不唯一的，考虑一下 pretty-printing 函数：

```haskell
view :: Exp -> String
view (Lit n) = show n -- show 可以理解为toString
view (Neg e) = "(-" ++ view e ++")"
view (Add e1 e2) = "(" ++ view e1 ++ " + " ++ view e2 ++ ")"

ti1_view = view ti1 -- "(8 + (-(1 + 2)))"
```

好了，基础部分结束，大家现在对 Haskell 有了基础的印象，接下来我们回到正题。

## Interpreter in the Final Approach

是滴，我们接下来会展现如何从底向上构建 Interpreter。以及展现 Haskell 的 `type class` 。

我们来考虑一下，实际上每一个 ADT 对应的是一个 op，那我们为什么不索性把他们看作一个普通的函数？我们把这些函数的签名放进一个class里面，这就是type class。从上面的例子中我们知道 Interpreter 可以多种多样换着法子来，所以我们认为这里存在一个多态：

```haskell
-- 这里repr可以理解为类型C++里的模版所以type class就类似interface
class ExpSYM repr where
  lit :: Int  -> repr
  neg :: repr -> repr
  add :: repr -> repr -> repr
```

那么我们先考虑实现 eval ，因为最终的结果是整数，毫无疑问，是关于 ExpSYM Int 的实例：

```Haskell
instance ExpSYM Int where
    lit n 		= n
    neg e			= - e
    add e1 e2 = e1 + e2
```

接下来我们考虑如何从这个 instance 的 result (Int) 得到我们想要的 result (Int)：

```haskell
eval :: Int -> Int
eval = id -- id 表示identity，即返回自身

tf1 = add (lit 8) (neg(add (lit 1) (lit 2))) 
tf1_eval = eval tf1 -- 5
```

同理，我们可以得到关于 view 的interpreter。

```Haskell 
instance ExpSYM String where
		lit n 		= show n
		neg n 		= "(-" ++ e ++ ")"
		add e1 e2 = "(" ++ e1 ++ " + " ++ e2 ++ ")"
		
view:: String -> String
view = id

tf1_view = view tf1 -- "(8 + (-(1 + 2)))"
```

为什么需要 Final Approach 的，原因很简单。

考虑从 Intial Approach 得到的 Exp，我们现在要对它进行扩展，加上乘法运算，怎么办呢？

**方法一，修改原有的声明：**

```haskell
data Exp = Lit Int
         | ...
         | Mul Exp Exp
```

但这么做是很危险的，如果你开发一个新功能，尚不清楚能否实现，但直接修改经过测试的正确封装的老代码，显然是行不通的。更不必提修改原有代码本身就是开销很大的事情。

**方法二，提升：**

```haskell
data MulExp = EOld Exp
            | Mul MulExp MulExp
            
evalm:: MulExp -> Int
evalm (EOld Exp)  = eval Exp
evalm (Mul e1 e2) = eval e1 * eval e2

tim2 = Mul (EOld (Lit 7)) (EOld ti1) -- okay to eval
tim1 = EOld (Add (Lit 7) (EOld ti1)) -- failed
```

呜呜呜，看起来我们没有办法再更进一步了（其实是有的，但是太复杂了）

那我们再来看看利用 Final Approach 如何实现扩展：

```haskell
class MulSYM repr where
    mul:: repr -> repr -> repr
    
-- 测试用例
tfm1 = add (lit 7) (neg (mul (lit 1) (lit 2)))
tfm2 = mul (lit 7) tf1

-- 实现
instance MulSYM Int where
    mul e1 e2 = e1 * e2
instance MulSYM String where
    mul e1 e2 = "(" ++ e1 ++ " * " ++ e2 ++ ")"
    
tfm1_eval = eval tfm1 -- 5
tfml_view = view tfm1 -- "(7 + (-(1 * 2)))"
```

完全不需要修改 `eval` 和 `view` 就能直接用，final 的方法的扩展性还是很强的。

## Pattern-Matching in the final approach

从 initial 的角度，很容易进行 pattern match，比如考虑将 `ti1 = Add (Lit 8) (Neg (Add (Lit 1) (Lit 2)))` 改写成 normal form `Add (Lit 8) (Add (Neg (Lit 1)) (Neg (Lit 2)))`，所谓normal form，就是只有整数上才区分正负，表达式不能取负，即：

```haskell
push_neg :: Exp -> Exp
push_neg e@Lit{} 						= e  		-- @ 是别名的意思即e=Lit{}
push_neg e@(Neg(Lit _)) 		= e
push_neg e@(Neg(Neg e)) 		= push_neg e
push_neg e@(Neg(Add e1 e2)) = Add (push_neg (Neg e1)) (push_neg (Neg e2))
push_neg e@(Add e1 e2)      = Add (push_neg e1) (push_neg e2)

ti1_norm = push_neg ti1
ti1_norm_view = view ti1_norm  -- "(8 + ((-1) + (-2)))"
ti1_norm_eval = eval til_norm  -- 5
```

可以看到进行了 `push_neg` 的两层匹配。那么怎么从 final 的角度怎么进行pattern match呢？可以注意到 `push_neg` 因为有匹配两层Neg，所以很难直接进行组合。那该怎么做呢，组合的时候记录下内层是否是 Neg 就好了这样只需要匹配一层就可以做了。

```haskell
data Ctx = Pos | Neg

instance ExpSYM repr => ExpSYM (Ctx -> repr) where
   lit n Pos = lit n
   lit n Neg = neg (lit n)
   neg e Pos = e Neg
   neg e Neg = e Pos
   add e1 e2 ctx = add (e1 ctx) (e2 ctx)
   
push_neg e = e Pos

tf1_norm = push_neg tf1
tf1_norm_view = view tf1_norm  -- "(8 + ((-1) + (-2)))"
tf1_norm_eval = eval tf1_norm  -- 5
```

同样的，我们很轻松的就能将它扩展到 MulSYM ：

```haskell
instance MulSYM repr => MulSYM (Ctx -> repr) where
    mul e1 e2 Pos = mul (e1 Pos) (e2 Pos)
    mul e1 e2 Neg = mul (e1 Neg) (e2 Neg)
    
tfm2_norm = push_neg tfm2
tfm2_norm_view = view tfm2_norm  -- "(7 * (8 + ((-1) + (-2))))"
tfm2_norm_eval = eval tfm2_norm  -- 35
```

### Flattening

因为 normal form 下所有的负号都在加号里了，考虑到实际上加法满足结合律，我们完全可以把其树形结构变为线性。同样，我们先从 initial 开始介绍。

```haskell 
flata :: Exp -> Exp
flata e@Lit{} = e
flata e@Neg{} = e
flata (Add (Add e1 e2) e3) = flata (Add e1 (Add e2 e3))
flata (Add e1 e2)          = Add e1 (flata e2)

norm = flata.push_neg
ti3 = (Add ti1 (Neg (Neg ti1)))
ti3_norm = norm ti3
ti3_norm_view = view ti3_norm  -- "(8 + ((-1) + ((-2) + (8 + ((-1) + (-2))))))"
ti3_norm_eval = eval ti3_norm  -- 10
```

没什么好多解释的。final 的做法也是记录一下内层状态，LCA (left child of addition)。

```haskell
data Ctx e = LCA e | NonLCA

instance ExpSYM repr => ExpSYM (Ctx repr -> repr) where
    lit n NonLCA   = lit n
    lit n (LCA e)  = add (lit n) e
    neg e NonLCA   = neg (e NonLCA)
    neg e (LCA e3) = add (neg (e NonLCA)) e3
    add e1 e2 ctx  = e1 (LCA (e2 ctx))  -- C[Add e1 e2] => Add e1 C[e2]

tf3 = (add tf1 (neg (neg tf1)))
tf3_view = view tf3  -- "((8 + (-(1 + 2))) + (-(-(8 + (-(1 + 2))))))"
tf3_eval = eval tf3  -- 10
```

其实到这里有的人应该已经懂了，其实就是加个 continuation 的事。从 final 的角度，continuation真的非常自然。

实际上不考虑扩展性的情况下， initial 和 final 可以互相转化

```haskell
instance ExpSYM Exp where
    lit = Lit
    neg = Neg
    add = Add
    
initial :: Exp -> Exp
initial = id

finalize :: ExpSYM repr => Exp -> repr
finalize (Lit n)     = lit n
finalize (Neg e)     = neg (finalize e)
finalize (Add e1 e2) = add (finalize e1) (finalize e2)
```

## Interpreting Tagless language

之前我们一直谈的是比较简单的加减法程序的 interpreter，下面我们讲进入更复杂的情况。首先我们得明白，why tag is considered bad。

### The Problem of Tags

考虑一个De Bruijn indice的 boolean lambda calculus解释器

> De Bruijn indice 是一种无需命名 bound variable 的 lambda calculus
>
> 举例来说： λ*z*. (λ*y*. *y* (λ*x*. *x*)) (λ*x*. *z* *x*) 对应的 De Bruijn index 是 λ (λ 1 (λ 1)) (λ 2 1)，其中数字代表的是它是对应多少层之上的变量。<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/De_Bruijn_index_illustration_1.svg/1920px-De_Bruijn_index_illustration_1.svg.png" alt="1920px-De_Bruijn_index_illustration_1.svg" style="zoom: 25%;" />

```haskell
data Exp = V Var
         | B Bool
         | L Exp			-- lambda 接受一个表达式把它加入环境
         | A Exp Exp  -- application 接受两个表达式，把第二个的结果代入第一个
data Var = VZ | VS Var  -- 0 := Z, 1:= S Z, 3 = S (S (S Z))
-- untyped 的 interpreter
{-
eval0 env (V v) = lookp v env  -- lookp 的作用是在 env 里找 v 对应的 lambda
eval0 env (B b) = b
eval0 env (L e) = (\x -> eval0 (x:env) e)
eval0 env (A e1 e2) = (eval0 env e1) (eval0 env e2)
-}
-- 显然 eval0 env (B b) 返回Bool， 而eval0 env (V v)返回一个function，故我们需要返回一个 Union Type
data U = UB Bool | UA (U -> U)

lookp VZ (x:_) = x
lookp (VS v) (_:env) = lookp v env

eval :: [U] -> Exp -> U
eval env (V v) = lookp v env
eval env (B b) = UB b
eval env (L e) = UA (\x -> eval (x:env) e)
eval env (A e1 e2) = case eval env e1 of
                       UA f -> f (eval env e2)
                       
ti1 = A (L (V VZ)) (B True)
ti1_eval = eval [] til -- UB True
```

看起来 works，然而考虑如下反例：

```haskell
ti2a = A (B True) (B False)  -- error， cannot apply a bool to a bool
ti2o = A (L (V (VS VZ))) (B True)
ti2o_eval = eval [] ti20  -- error no way to lookp (VS VZ) in []
```

为了避免此类错误我们需要引入类型系统，我们想通过一个 type checker 确保程序要么返回一个 type-checked term 要么返回 type error，一个 type checker 是诸如此类的函数

```haskell
typecheck :: Exp -> Either ErrMsg Exp
type ErrMsg = String

\term -> case typecheck term of
              Left e  -> putStrLn $ "Type error: " ++ e
              Right x -> do
                         print $ eval [] x
                         -- ...
```

通过 typecheck 以后能保证 `eval [] x` 一定能返回值。

实际上在 Pattern Match 的时候 type tags (UA, UB等) 会造成很大的负担，因为这相当于在经过了 type check 以后我们仍然需要在运行时 dynamic check。然而当我们 eval 的时候仍然需要知道tag 信息帮助我们执行不同的操作。这说明我们必须重新设计，从而将 type check 和 eval 更好的结合起来。

### Tagless

同理，从 intial 开始我们 simply typed lambda calculus with booleans

当然达到这点需要一些 GADT 的扩展，这里不用细究 GADT 是什么，总之我们现在可以用自由变元去约束 term 了。

```haskell
data Exp env t where
    B :: Bool           -> Exp env Bool 
    -- Axiom: Boolean literal has type Bool in any environment
    -- 作用是接受一个Bool的表达式把它转化为表达式里的值，类似lit
    V :: Var env t      -> Exp env t 
    -- Reference to a hypothesis
    -- 这里的t就是自由变元，可以是boolean或function
    -- 作用是通过Var对应的指标找到对应环境里的表达式
    L :: Exp (a,env) b  -> Exp env (a->b)			-- 这里的(,)可以类比(:)
    -- Implication introduction
    -- 从环境里接受一个 a 到结果 b 中的表达式
    A :: Exp env (a->b) -> Exp env a -> Exp env b
    -- Implication elimination
    -- 将 a 应用到 a->b
    
data Var env t where
    VZ :: Var (t,env) t               -- Assumption axiom
    -- 当前环境的表达式
    VS :: Var env t -> Var (a,env) t  -- Weakening
    -- 上一层
```

比较和上面的不同，其实在 construct 的时候我们便利用了 type 从而避免了 type check 的烦恼。有了这些我们可以直接写 eval 了，其实和 eval0 一样，改都不用改。

```haskell
eval :: env -> Exp env t -> t
eval env (V v) = lookp v env
eval env (B b) = b
eval env (L e) = \x -> eval (x,env) e
eval env (A e1 e2) = (eval env e1) (eval env e2)

lookp :: Var env t -> env -> t
lookp VZ (x,_)       = x              
lookp (VS v) (_,env) = lookp v env
```

总之，我们现在能够实现 tagless typed interpreter 了，可喜可贺。

然后我们考虑一下如何实现 final tagless typed interpreter吧。我们实际上是找一个从 env 到值的映射代表表达式的结果。

```haskell
-- lookp
vz :: (a, b) -> a
vz (vc,_)       = vc
vs :: (t1 -> t2) -> (a, t1) -> t2
vs vp (_, envr) = vp envr

b bv env    = bv
l e env     = \x -> e (x,env)
a e1 e2 env = (e1 env) (e2 env)
```

让GHCi帮我们 infer 函数类型：

```haskell
b :: t -> env -> t
l :: ((t1,env) -> t) -> env -> t1 -> t
a :: (env -> t1 -> t) -> (env -> t1) -> env -> t
```

是的，就这么简单。直接把大写改小写去掉eval就好了。

和之前一样，我们可能会想要把通过 typeclass 实现多种解释，并且现在我们从 Boolean 进一步到 Int， 加上整数加法。

```Haskell
class Symantics repr where
    int :: Int -> repr h Int      -- h 对应intial case中的 env
    add :: repr h Int -> repr h Int -> repr h Int
    
    z   :: repr (a,h) a           		  -- 对应 vz
    s   :: repr h a -> repr (any,h) a   -- 对应 vs
    lam :: repr (a,h) b -> repr h (a->b)
    app :: repr h (a->b) -> repr h a -> repr h b
```

写到这大家就发现，怎么只是换个名字，这个类型签名怎么都差不多啊。intial 和 final 之间是不是有什么更广义的对应关系，没错，有的，下文会展示。

同样的，我们通过 instance 新增 interpreter

```haskell
newtype R h a = R {unR :: h -> a} 
-- R和unR分别对应constructor和eliminater.
-- R的作用是接受一个环境到值的映射 (h->a) 然后返回包装(R h a)
-- unR则相反，把R h a还原成 (h->a)，unR可以理解为eval
-- 使用R是为了体现 interpreter 的名字是 user defined

instance Symantics R where
    int x     = R $ const x    -- 接受一个环境(这里是Int)返回x本身(因为也是Int)
    add e1 e2 = R $ \h -> (unR e1 h) + (unR e2 h)
    
    z     = R $ \(x,_) -> x       -- 环境里的第一层
    s v   = R $ \(_,h) -> unR v h -- 更外一层
    lam e = R $ \h -> \x -> unR e (x,h)
    app e1 e2 = R $ \h -> (unR e1 h) (unR e2 h)
    
eval e = unR e ()  -- 从空环境开始

th3 = lam (\x -> add (app x (int 1)) (int 2))
th3_eval = eval th3 -- th3_eval :: (Int -> Int) -> Int

-- 再来个view
newtype S h a = S {unS :: Int -> String}
instance Symantics S where
    int x     = S $ const $ show x
    add e1 e2 = S $ \h ->
      "(" ++ unS e1 h ++ " + " ++ unS e2 h ++ ")"
      
    z     = S $ \h -> "x" ++ show (h-1)
    s v   = S $ \h -> unS v (h-1)
    lam e = S $ \h ->
        let x = "x" ++ show h
        in "(\\" ++ x ++ " -> " ++
             unS (e (S $ const x)) (succ h) ++ ")"
        
view :: S () a -> String
view e = unS e 0

th3_view = view th3 -- "(\\x0 -> ((x0 1)+2))"
```

除了 lambda 的表达变化比较大，其它都大同小异。

实际上可以由于 Haskell 会保留环境信息，所以可以更进一步简化：

```haskell
newtype R a = R{unR :: a}

instance Symantics R where
    int x     = R x
    add e1 e2 = R $ unR e1 + unR e2
    
    lam f     = R $ unR.f.R
    app e1 e2 = R $ (unR e1) (unR e2)
    
eval = unR
```

同理，可以加上 pretty print

```haskell
type VarCounter = Int
newtype S a = S {unS :: VarCounter -> String}

instance Symantics S where
    int x     = R $ const x
    add e1 e2 = R $ \h -> (unR e1 h) + (unR e2 h)

    z     = R $ \(x,_) -> x
    s v   = R $ \(_,h) -> unR v h
    lam e = R $ \h -> \x -> unR e (x,h)
    app e1 e2 = R $ \h -> (unR e1 h) (unR e2 h)

view e = unS e 0
```

同样，也可以做扩展：

```haskell
-- * Multiplication
class MulSYM repr where
    mul :: repr Int -> repr Int -> repr Int
-- * Booleans
class BoolSYM repr where
    bool :: Bool -> repr Bool             -- bool literal
    leq :: repr Int -> repr Int -> repr Bool
    if_ :: repr Bool -> repr a -> repr a -> repr a
-- * Fixpoint
class FixSYM repr where
    fix :: (repr a -> repr a)  -> repr a

-- Extension on R
instance MulSYM R where
    mul e1 e2 = R $ unR e1 * unR e2
instance BoolSYM R where
    bool b    = R b
    leq e1 e2 = R $ unR e1 <= unR e2
    if_ be et ee = R $ if unR be then unR et else unR ee 
instance FixSYM R where
    fix f = R $ fx (unR . f . R) where fx f = f (fx f)

tpow  = lam (\x -> fix (\self -> lam (\n ->
                        if_ (leq n (int 0)) (int 1)
                            (mul x (app self (add n (int (-1))))))))
-- repr (Int -> Int -> Int)
tpow7 = lam (\x -> app (app tpow x) (int 7))
tpow72 = app tpow7 (int 2)
tpow72_eval = eval tpow72 -- 128
```

同理，initial 和 final 的 tagless encoding 也有对应关系