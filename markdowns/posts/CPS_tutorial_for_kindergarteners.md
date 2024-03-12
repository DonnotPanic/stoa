+++
date = "2020-04-01"
series = ["Haskell","paradigm","programming"]
+++

# CPS Tutorial For Kindergarteners

> "It was a detour that was our shortest path"  
>
> ——*Julius·Caesar·Zeppeli*

## Continuation

Edgar Dijkstra once serverely critisized the excessive use of `goto` statement in programming for that code that uses goto statements is harder to understand than alternative constructions. When I was still a freshman, I really found myself confused by that—— what can I do without `goto`? Well, your software teacher might have told you that, by  **structured program theorem**, the `goto` statement in programs which can be expressed as flowchart can be avoided by using the combination of the three programming constructs of `sequence` , ` selection/choice`, and `repetition/iteration` despite the fact that code duplication and additional variables may need to be introduced.

Well, you teachers are telling the truth, but what he/she might not say is that the `goto` statement is not the only choice for jump statement and by jump statement I mean the ability to run programming non-linearly, which may sound a little surprising to those who are new to this. And, of course, as you can see it in the title this is a tutorial of CPS, and I am gonna introduce continuation, which is absolutely a substitute for that.

By continuation, we simply means a data structure that represents **the computational process at a given point in the process's execution**. That may sound a little bit abstract, but don't worry, I will illustrate this with a example.

Suppose you are going to evaluate boolean expression, you may have the expression looks like this:

```haskell
data Expr = Val Bool | Not Expr | And Expr Expr | Or Expr Expr

eval :: Expr -> Bool
eval (Val b) = b
eval (Not x) = not (eval x)
eval (And x y) = (eval x) && (eval y)
eval (Or x y) = (eval x) || (eval y)
```

There is nothing to say about `Not` and since `And` and `Or` are the same, just take the `And` as the example.

While evaluating `Add x y` you actually are evaluating`(eval x) && (eval y)`,which means you first do `eval x ` then do `&& (eval y)`. And  `&& (eval y)` is the so-called continuation, which, literally speaking, is the computation you are going to do next (after `eval x`).

My trick to understand this is to view a continuation as a function with a hole that awaits the result from its frontier. In this case, you can image that continuation is `(\u -> u && (eval y))` where `u = eval x` is the hole.

## Continuation-Passing Style

Some may still be confused by why continuation is needed, that will not be a problem after you fully grab the core of CPS, AKA Continuation-Passing Style. Let's back to the example above. So here is the `Add x y` , you will `eval x` first and leave alone `&& (eval y)` . What we are going to do is to explicitly show how the control flows within the calculation. We added a function as a parameter of our new `eval'` which simply means the next operation we are going to do on the result of `eval`. 

```haskell
--eval to eval'
eval' :: Expr -> (Bool -> Bool) -> Bool
eval' x k = k (eval x)
```

And reversely, it's not hard to find when `k = id`  we will destruct `eval'` to `eval`by neglecting all the computation behind.

```haskell
--eval' to eval
eval = eval' id
```

Yes, we've managed to prove the isomorphism between `eval` and `eval'` , however, that's not enough. What we actually want is to rewrite the whole definition of `eval'` just using `eval'` and lambda calculus.

```haskell
eval' (Val b) c = c b
eval' (Not x) c = eval' x c.not
-- eval' (And x y) c = eval' x (\u -> c (u && (eval y)))
-- where u:bool = eval x:Expr
eval' (And x y) c = eval' x (\u -> eval' y (\v -> c (u && v)))
-- where u:bool = eval x:Expr and v:bool = eval y:Expr
-- similarly
eval' (Or x y) c = eval' x (\u -> eval' y (\v -> c (u || v)))
```

That's pretty good because we now can keep the process of the recursion explicit while doing evaluation. Before we continue, we may want to eliminate the annoying lambda and make it first-order. For those who're new to this concept, first-order means there will be no more higher-order function. That will lead to a technique called defunctionaliation. The concrete methods is not our concern at present. I will just give out the result.

```haskell
data Cont = STOP | EVAL_A Expr Cont | EVAL_O Expr Cont |
						NOT Cont | AND Bool Cont | OR Bool Cont
-- Expr = Val Bool | Not Expr | And Expr Expr | Or Expr Expr
eval'' :: Expr -> Cont -> Bool
-- eval will transform expression into continuation
eval'' (Val b) c = exec c b
eval'' (Not x) c = eval'' x (NOT c)
eval'' (And x y) c = eval'' x (EVAL_A y c)
eval'' (Or x y) c = eval'' x (EVAL_O y c)

exec :: Cont -> Bool -> Bool
-- exec will using the value to fill the hole in current continuation if there is only one
-- and ask for next continuation. Otherwise, it will call eval to get the value of other holes.
exec STOP b = b
exec (NOT c) b = exec c (not b)
exec (EVAL_A x c) b = eval'' x (AND b c)
exec (EVAL_O x c) b = eval'' x (OR b c)
exec (AND a c) b = exec c (a && b)
exec (OR a c) b = exec c (a || b)

run e = eval'' e STOP
```

And after all, we've got the abstract represent of a machine that calculate any boolean expression composed by <`and` , `or` , `not`> and you are 100% sure this program will halt. You may find, well, in consequence, the Cont stores the function that's going to be calculate next and since it's a LIFO structure it works just like a control stack——while we do eval we actually push functions into the control stack and exec is the opposite —— we pop the control stack and apply what we've poped to the current result. You can see, it's the **Pushdown Automata**.

If you've never heard of Pushdown Automata, don't worry. Since this tutorial is written for the kindergarteners, if you can't find the relationship between this whole banch of things and `goto` statement, I am going to show you how the thing goes.

As we dig deep into the very essence of `goto` statement, it is obvious `goto` is nothing but branch. I mean, by `goto` you actually jump to another instruction instead of the one that follows. In a CFG (Control Flow Graph), you may replace any `goto` with the arrows pointing to another BB (Basic Block) instead of the one right beneath. Well, we could make it by escape continuation mechanism. Again, I will use the evalutaion of boolean expression as my example. Let's add an error handler Throw / Catch.

```haskell
data Expr = Val Bool | Not Expr | And Expr Expr | Or Expr Expr |
						Throw | Catch Expr Expr
data Cont = STOP | EVAL_A Expr Cont | EVAL_O Expr Cont |
						NOT Cont | AND Bool Cont | OR Bool Cont |
						HAND Expr Cont

eval'' :: Expr -> Cont -> Maybe Bool
eval'' (Val b) c = exec c b
eval'' (Not x) c = eval'' x (NOT c)
eval'' (And x y) c = eval'' x (EVAL_A y c)
eval'' (Or x y) c = eval'' x (EVAL_O y c)
eval'' Throw c = unwind c
eval'' (Catch x y) c = eval'' x (HAND y c)

exec :: Cont -> Bool -> Maybe Bool
-- execute the control stack.
exec STOP b = Just b
exec (NOT c) b = exec c (not b)
exec (EVAL_A x c) b = eval'' x (AND b c)
exec (EVAL_O x c) b = eval'' x (OR b c)
exec (AND a c) b = exec c (a && b)
exec (OR a c) b = exec c (a || b)
exec (HAND _ c) b = exec c b

unwind :: Cont -> Maybe Bool
-- unwind the control stack until c = HAND Expr Cont
unwind STOP = Nothing
unwind (HAND x c) = eval'' x c
unwind (EVAL_A _ c) = unwind c
unwind (EVAL_O _ c) = unwind c
unwind (NOT c) = unwind c
unwind (AND _ c) = unwind c
unwind (OR _ c) = unwind c

run e = eval'' e STOP
```

As you can see, when there is a `Throw` appears in the expression, the `eval''` will call `unwind` to unwind the control stack until it meets `Hand`, otherwise it may escape from this program and ends in `Nothing`. The `Catch` will return the result of its first argument until one of it's argument are `Throw` which will make it return the value which is not empty. In other words, `Catch` catches the `throw` . By `Catch` and `Throw` , we managed to make a jump —— the `Throw`  abort the computation between itself and `Catch`, here `Throw` works similarly as `goto` where catch is.

Sometimes, we'd like to combine `Catch` and`Throw` together, and here we do have such a function called `callCC` , AKA call-with-Current-Continuation. For those who have learned some lisp that will not be unfamiliar. In Haskell, `callCC` is a little bit different from that in a dynamic typed language like scheme, but you can still think that `callCC` means applying the current continuation to the value and return the result directly, neglecting all the operation behind. And in most of times `callCC` has nothing different from the `return` except that it will ask you to write down the continuation explicitly.

## Mother of all Monads

Now, let's just step back to the original defination of the continuation since we want to generalize the conclusion.

```haskell
-- Cont r a = (\k -> k u) apply function k:a -> r to a given u:a.
newtype Cont r a = {runCont :: (a -> r) -> r}
```

As we all know, in mathematics, a **monad** is nothing but a category with an endofunctor $T$ and two natrual transformations $\eta : I_x\rightarrow T$ and $\mu : T^2\rightarrow T$. Appearently the CPS is a monad.

```haskell
instance Functor (Cont r) where
-- Functor
fmap f m = Cont $ \c -> runCont m (c . f)

instance Monad (Cont r) where 
-- eta
return a = Cont $ \c -> c a
-- mu or bind
m >>= k = Cont $ \c -> runCont m (\s -> runCont (k s) c)
```

A quick prove on its property:

```haskell
{-- left identity : return a >>= k = k a
  return a >>= k
= Cont $ \c -> runCont (return a) (\s -> runCont (k s) c)
= Cont $ \c -> runCont (Cont $ (\c -> c a)) (\s -> runCont (k s) c)
= Cont $ \c -> runCont (k a) c
= k a
--}
{-- right identity : m >>= return = m
  m >>= return
= Cont $ \c -> runCont m (\s -> runCont (return s) c)
= Cont $ \c -> runCont m (\s -> (runCont (Cont $ \c -> c s) c))
= Cont $ \c -> runCont m (\s -> c s)
= Cont $ \c -> runCont m c
= m
--}
{-- associative law : m >>= (\x -> k x >>= h) = (m >>= k) >>= h
  m >>= (\x -> k x >>= h)
= m >>= (\x -> Cont (\c -> runCont (k x) (\s -> runCont (h s) c)))
= Cont $ \c -> runCont m (\s -> runCont ((\x -> Cont (\c -> runCont (k x) (\s -> runCont (h s) c))) s) c)
= Cont $ \c -> runCont m (\s -> runCont (Cont (\c -> runCont (k s) (\s -> runCont (h s) c))) c)
= Cont $ \c -> runCont m (\s -> runCont (k s) (\s -> runCont (h s) c))
= runCont (Cont $ \c -> runCont m (\s -> runCont (k s) c)) (\s -> runCont (h s) c)
= (m >>= k) >>= h
--}
```

We proved that `Cont r a` in fact preserve a monoid structure in the category of its endofunctor, more precisely, we proved the existence of left identity and right identity, in this case it's `return`, and the associative law. That's good, but what is the point of fingering out the mathematic structure of CPS, you may ask. Sometimes we may assume that a good mathematics structure of the data structure can help us to do optimizing on the programs, though I have to admit that to think that it is the mathematics struture of CPS rather that the monoid, which happens to be the right structure, that matters is also acceptable. Anyway, let's keep this in mind that continutaion has a certain structure called monad.

So next time, when you see another data type which also have a monad in it, you can point it out that, in fact, it has the same structure that continuation has. As my title said is the mother of monad, there must be some deeper connection between them and, yes, you may assmue that any data type with monad structure can be optimized by the technique of tail-call optimization or others. But that will not be the topic today. Let's jump to the question of how to construct any data type with Monad using continuation.

I am still going to use Maybe Bool as my example.

```haskell
expr1 = do
  a <- return True
  b <- return False
  c <- return True
  return $ not a && (b || c)

runCont expr1 Just -- Just False
```

Let's first neglect the runCont here, you may treat it as a unwrapper. Do notation is a syntactic sugar, you can rewrite the whole thing like:

```haskell
expr1 = return True >>= (\a ->
        return False >>= (\b ->
        return True >>= (\c ->
        return $ not a && (b || c))))
```

At first glance, it seems that the function works perfectly well without continuation. Well, how about change it into CPS ?

```haskell
expr2 = do
 a <- return True
 b <- cont (\k -> k False)
 c <- cont (\k -> k True)
 return $ not a && (b || c) 
 
runCont expr2 Just -- Just False
```

Now, we get it done. Why don't we just add an escape continuation?

```haskell
run m = runCont m return

expr3 = run $ do
  a <- return True
  b <- cont (\k -> Nothing >>= k)
  c <- cont (\k -> k True)
  return $ not a && (b || c) -- Nothing
```

Or using `callCC`

```haskell
expr3 = run $ do
  a <- return True
  b <- callCC (\k -> cont (\x -> Nothing))
  c <- cont (\k -> k True)
  return $ not a && (b || c) -- Nothing
```

And just try to embeds the Bool into list.

```haskell
expr4 = run $ do
  a <- cont (\k -> [True] >>= k)
  b <- cont (\k -> [False] >>= k)
  c <- cont (\k -> [True, False] >>= k)
  return $ not a && (b || c) -- [False, False] 
```

After a skim of the implementation of Cont Monad as the utility to describe the behaviour of other monads, we could now talk about what is **delimited continuation** and the relationship between delimited continuation and Cont Monad.

## Delimited Continuation

> [Delimited continuations](http://okmij.org/ftp/continuations/##tutorial) are continuations whose extent is delimited. In the expression 3+[5∗2]−1, we implicitly assumed that the rest of the current expression spans whole the expression, that is, 3+[·]−1. Rather than taking whole the rest of the computation, however, we sometimes want to capture only a part of it. Such continuations are called delimited continuations.
> The extent to which the current delimited continuation spans is designated by an explicit delimiter ⟨· · ·⟩. For example, in the expression ⟨3 + [5 ∗ 2]⟩ − 1, the current delimited continuation at [5 ∗ 2] is only ⟨3 + [ · ]⟩ and does not contain − 1.

Briefly speaking, a delimited continuation consists only two speical operation, `reset` and `shift` . While `reset` delimits the continuation, `shift` captures it. 

In detail,  `shift (\k -> M)` proceeds as follows:

1. The current delimited continuation is cleared.
2. The cleared continuation is passed to `\k -> M` as an argument
3. The body M is executed.

For instance, giving `reset (\ () -> 3 + shift (\ _ -> 5 * 2)) - 1` the result will be $5*2 - 1 = 9$, which discard the delimited continuation. Giving `reset (\ () -> 3 + shift (\ k -> k)) - 1` the result will be `(\ x -> 3 + x - 1)` , which extract the delimited continuation. 

```haskell
-- shift f captures the continuation up to the nearest enclosing reset and passes it to f:
shift :: ((a -> r) -> Cont r r) -> Cont r a
shift f = shiftT (f . (runIdentity .))
-- shift f = cont (evalCont . f)
--  where evalCont :: Cont r r -> r
--        evalCont x = runCont x id

shiftT :: (Monad m) => ((a -> m r) -> ContT r m r) -> ContT r m a
shiftT f = ContT (evalContT . f)

reset :: Cont r r -> Cont r' r
reset = resetT
-- reset = lift.evalCont
--   where lift :: (Monad m) => m a -> t m a      satisfies that
--         lift . return = return
--         lift (m >>= f) = lift m >>= (lift . f)

resetT :: (Monad m) => ContT r m r -> ContT r' m r
resetT = lift . evalContT
```

Since monad transformer are not our concern, just neglect it. The function may seems hard to understand, but to understand how the function is defined is not our priority. We want to figure out how `shift` and `reset` interact with each other.

```Haskell
-- reset m delimits the continuation of any 'shift' inside m.
reset (return m) = return m
-- shift f captures the continuation up to the nearest enclosing reset and passes it to f:
reset (shift f >>= k) = reset (f (evalCont . k))
```

The best way to illustrate is to give some examples:

```haskell
-- liftM2 :: Monad m => (a1 -> a2 -> r) -> m a1 -> m a2 -> m r

infixl 6 +!
infixl 7 *!
(+!),(*!) :: (Num a, Monad m) => m a -> m a -> m a 
(+!) = liftM2 (+)
(*!) = liftM2 (*)

runC = (flip runCont) id

runC (reset (return 2 *! shift (\k -> return $ k (k 10))) +! return 1)
--  = return ((\k -> k (k 10)) (\x -> 2 * x) + 1)
--  = return (2 * (2 * 10) + 1) = return 41
runC (reset (return 3 +! shift (\k -> return 10) +! return 2))
--  = return 10
-- the value of shift escaped from the contents.
```

By delimited continuation we've actually got a more flexible way to manipulate the control flow of the programs. And, of course, with `reset` and `runCont` you can even define a function that transform a `Cont r a` into `r` which simply means you can take the value out of the encapsulation of monad.

