+++
date = "2020-06-07"
title = "SKI 组合子"
katex = true
series = ["Haskell","paradigm"]
+++

关于 **SKI组合子** 的历史以及发明的动机我就不谈了。而且让我来说我也说不好。这里只是简单介绍一下什么是 **SKI组合子** 以及利用  **SKI** 实现 **Point-free Style** 的转换。

## 什么是 SKI 组合子

写的简单一点，**SKI组合子** 是某种高阶函数，定义为：

```haskell
i :: a -> a
i x = x
k :: a -> b -> a
k x y = x
s :: (a -> b -> c) -> (a -> b) -> a -> c
s x y z = x z (y z)
```

注意到其实这就对应：

```haskell
i = id
k = const
s = ap
-- s = (<*>)
```

> 实际上这里（Applicative m) => m 可以看作 a -> \*，这样
> s :: (a -> b -> c) -> (a -> b) -> a -> c
> 等价于(<\*>) :: m (b -> c) -> m b -> m c

仅仅这三个组合子就足以表示各种可计算函数了[^1]

其实只需要 **SK** 就完全足够了，下面将证明 **I** 可以由 **SK组合子** 表示

$$
\begin{align\*}
&\  \text {I} \\\\\\
\Rightarrow\ & \lambda x. x\\\\\\
\Rightarrow\ & \lambda x. \text {K $x$ \_ } \\\\\\
\Rightarrow\ & \lambda x. \text {K}\ x\ (\text {K \_ }x)\\\\\\
\Rightarrow\ & \lambda x. \text {S K}\ (\text {K \_ })x\\\\\\
\Rightarrow\ &  \text {S K}\ (\text {K \_ ) }\\\\\\
\end{align\*}
$$

[^1]:详见 **Church's Thesis**
## Point-free Style

实际上在之前用 **SK组合子** 表示 **I** 的最后一步用到了 **eta reduction**。简单的说 **eta reduction** 就是 $\lambda x.f\ x =\_\eta f$ 其中 $f$ 必须不含约束变元 $x$ 。

**Point-free Style** 就是采用高阶函数和 **eta reduction** 约去函数中所有的约束变元。

下面用几个例子让大家熟悉一下 : D

**Case1:**
$$
\begin{align\*}
&\  \text {flip (\\$) :: {a $\to$ (a $\to$ b) $\to$ b}} \\\\\\
\Rightarrow\ & \lambda x.\lambda f.f\ x\\\\\\
\Rightarrow\ & \lambda x.\lambda f.\text {I $f$ (K $x$ $f$)}\\\\\\
\Rightarrow\ & \lambda x.\lambda f.\text {S I (K $x$) $f$}\\\\\\
=\_\eta\ & \lambda x.\text {S I (K $x$)}\\\\\\
\Rightarrow\ & \lambda x.(\text {K (S I)) $x$ (K $x$)}\\\\\\
\Rightarrow\ & \lambda x.\text {S (K (S I)) K $x$}\\\\\\
=\_\eta\ & \text {S (K (S I)) K}\\\\\\
\end{align\*}
$$

**Case2:**
$$
\begin{align\*}
&\  \text {compose :: {(b $\to$ c) $\to$ (a $\to$ b) $\to$ a $\to$ c}}\\\\\\
\Rightarrow\ & \lambda g.\lambda f.\lambda x.g\ (f\ x)\\\\\\
\Rightarrow\ & \lambda g.\lambda f.\lambda x.(\text {K } g)\ x\ (f\ x)\\\\\\
\Rightarrow\ & \lambda g.\lambda f.\lambda x.\text {S (K }g)\ f\ x\\\\\\
=\_\eta\ & \lambda g.\lambda f.\text {S (K $g$) $f$} \\\\\\
=\_\eta\ & \lambda g.\text {S (K $g$)}\\\\\\
\Rightarrow\ & \lambda g.\text {(K S) $g$ (K $g$)}\\\\\\
\Rightarrow\ & \lambda g.\text {S (K S) K $g$}\\\\\\
=\_\eta\ & \text {S (K S) K}\\\\\\
\end{align\*}
$$

**Case3:**
$$
\begin{align\*}
&\  \text {flip :: {(a $\to$ b $\to$ c) $\to$ b $\to$ a $\to$ c}}\\\\\\
\Rightarrow\ & \lambda f.\lambda b.\lambda a.f\ a\ b\\\\\\
\Rightarrow\ & \lambda f.\lambda b.\lambda a.f\ a\ ((\text {K }b)\ a)\\\\\\
\Rightarrow\ & \lambda f.\lambda b.\lambda a.\text {S $f$ (K }b)\ a\\\\\\
=\_\eta\ & \lambda f.\lambda b.\text {S $f$ (K }b)\\\\\\
\Rightarrow\ & \lambda f.\lambda b.\text {(K (S $f$) b) (K }b)\\\\\\
\Rightarrow\ & \lambda f.\lambda b.\text {(K (S $f$)) b (K }b)\\\\\\
\Rightarrow\ & \lambda f.\lambda b.\text {S (K (S $f$)) K }b\\\\\\
=\_\eta\ & \lambda f.\text {S (K (S $f$)) K }\\\\\\
\Rightarrow\ & \lambda f.\text {S ((K K f) (S $f$)) K }\\\\\\
\Rightarrow\ & \lambda f.\text {S ((K K) f (S $f$)) K }\\\\\\
\Rightarrow\ & \lambda f.\text {S (S (K K) S $f$) K }\\\\\\
\Rightarrow\ & \lambda f.\text {(K S f) (S (K K) S $f$) K }\\\\\\
\Rightarrow\ & \lambda f.\text {(K S) f (S (K K) S $f$) K }\\\\\\
\Rightarrow\ & \lambda f.\text {(S (K S) (S (K K) S) $f$) K }\\\\\\
\Rightarrow\ & \lambda f.\text {(S (K S) (S (K K) S) $f$) (K K $f$) }\\\\\\
\Rightarrow\ & \lambda f.\text {S (S (K S) (S (K K) S)) (K K) $f$ }\\\\\\
=\_\eta\ & \text {S (S (K S) (S (K K) S)) (K K)}\\\\\\
\end{align\*}
$$

**Case4:**
$$
\begin{align\*}
&\  \text {join :: {(a $\to$ a $\to$ b) $\to$ a $\to$ b}}\\\\\\
\Rightarrow\ & \lambda f.\lambda x.f\ x\ x\\\\\\
\Rightarrow\ & \lambda f.\lambda x.f\ x\ \text {(I } x)\\\\\\
\Rightarrow\ & \lambda f.\lambda x.\text {S $f$ I }x \\\\\\
=\_\eta\ & \lambda f.\text {S $f$ I}\\\\\\
\Rightarrow\ & \lambda f.\text{S $f$ (K I }f) \\\\\\
\Rightarrow\ & \lambda f.\text{S S (K I) }f \\\\\\
=\_\eta\ & \text{S S (K I) }\\\\\\
\end{align\*}
$$


从这些例子我们似乎可以发现一些规律，对于任意一个 **lambda表达式** 我们可以采取这些方法将它转化为 **Point-free Style**：

1. $\lambda x.x$，对应 **I**。`(1)`

2. $\lambda x. \text A$，$\text A $ 中约束变元 $x$ 不出现。那么有$\lambda x. \text A \Rightarrow\lambda x. \text {K A }x =\_\eta \text {K A}$。`(2)`

3. $\lambda x. \text A$，$\text A$ 中含有约束变元$x$，如果$ \text A$只有一项，则对应 `(1)` 。如果拥有至少两项，因为左结合性，$f\_1\ f\_2\ f\_2 \cdots\ f\_n$ 一定可以表示成 $(\cdots((f\_1\ f\_2)\ f\_3)\cdots )\ f\_n $。则我们假设其可以表示为 $ \lambda x.\text {B C}$ 的形式，对其进行递归分解讨论。 `(3)`

   1. $\text B$ 中不含约束变元 $x$，则 $\text C$ 中一定含有约束变元 $x$。
      1. $\text C = x$， 那么直接采用 **eta reduction** 即可。
      2. $\text {C = (E }x)$ ，其中 $\text E$ 不含约束变元 $x$ ，通过 `(2)` 可以将 $\text B$ 转化为 $\text {(K B) $x$}$，跳到 `(4)`。
      3. 其余情况，对 $\text {C} $ 进行递归分解 `(5)`。
   2. $\text B $ 中含有约束变元 $x$ 。$\text B = x $，那么可以转化为 $\text I\ x$。若$\text {B = (D }x) $，其中 $\text D $ 不含约束变元 $x$ 。
      1. $\text C $ 中不含约束变元 $x$。通过 `(2)` 可以将 $\text C $ 转化为 $\text {(K C) $x$}$。跳到 `(4)`。
      2. $\text {C = (E }x)$ ，其中 $\text E$ 不含约束变元 $x$ ，那么  $ \lambda x.\text {B C} \Rightarrow \lambda x.\text{(D $x$) (E $x$)} \Rightarrow \lambda x.\text {S D E } x =\_\eta \text {S D E}$。`(4)`
      3.  其余情况对 $\text C$ 进行递归分解 `(5)`。
   3. 对 $\text C$ 进行递归分解 `(5)`。

4. 对于上式中提到的递归分解，可以视作局部对含有约束变元的表达式 $\text X$ 进行 **alpha conversion** 后进行 `(3)` 的操作，对结果代入 $x$ 进行 **beta reduction**。举例来说就是把 $\text X$ 中约束出现的 $x$ 替换为 $y$ 进行 `(3)` 之后一定可以表示为 $\text Y$ ，$\text Y$ 中没有约束出现的 $y$ 或 $x$，直接在其后应用 $x$，就可以变为 $\text {(Y }x)$ 的形式。`(5)`

   其实就是不断的将内层转化为 $ \text{(D $x$) (E $x$)}$的形式然后利用 $\text {(S D E) }x$ 消去内层的 $x$，把 $x$ 带到外层来。

实际上考虑到 **SKI** 过于冗长，我们会用到 `flip` 和 `compose/(.)` 进行简化。
形如 $\lambda x.\text {B (E }x)$ 的表达式（$\text B$ ，$ \text E$ 中没有约束出现的 $x$）可以表示为 $\text{(.) B （$\lambda x$.E $x$）}$。
形如 $\lambda x.\text {(D $x$) C}$ 的表达式（$\text C$ ，$ \text D$ 中没有约束出现的 $x$）可以表示为 $\text{flip（$\lambda x$.D $x$）C}$。

让我们重新写一下`flip`、 `flip ($)` 和 `join`

**flip:**
$$
\begin{align\*}
&\  \text {flip :: {(a $\to$ b $\to$ c) $\to$ b $\to$ a $\to$ c}}\\\\\\
\Rightarrow\ & \lambda f.\lambda b.\lambda a.f\ a\ b\\\\\\
\Rightarrow\ & \lambda f.\lambda b.\lambda a.f\ a\ ((\text {K }b)\ a)\\\\\\
\Rightarrow\ & \lambda f.\lambda b.\lambda a.\text {S $f$ (K }b)\ a\\\\\\
=\_\eta\ & \lambda f.\lambda b.\text {S $f$ (K }b)\\\\\\
\Rightarrow\ & \lambda f.\lambda b.\text {(S $f$) (K }b)\\\\\\
\Rightarrow\ & \lambda f.\text {(.) (S $f$) ($\lambda b$.K }b)\\\\\\
=\_\eta\ & \lambda f.\text {(.) (S $f$) K}\\\\\\
\Rightarrow\ & \lambda f.\text {(.) (S $f$) (K K (S $f$))}\\\\\\
\Rightarrow\ & \lambda f.\text {S (.) (K K) (S $f$)}\\\\\\
\Rightarrow\ & \text {(.) (S (.) (K K)) $\lambda f$.(S $f$)}\\\\\\
=\_\eta\ & \text {(.) (S (.) (K K)) S}
\end{align\*}
$$
**flip ($):**
$$
\begin{align\*}
&\  \text {flip (\\$) :: {a $\to$ (a $\to$ b) $\to$ b}} \\\\\\
\Rightarrow\ & \lambda x.\lambda f.f\ x\\\\\\
\Rightarrow\ & \lambda x.\text {flip}\ (\lambda f.f)\ x\\\\\\
=\_\eta\ & \lambda x.\text {flip I $x$}\\\\\\
=\_\eta\ & \text {flip I}
\end{align\*}
$$
**join:**
$$
\begin{align\*}
&\  \text {join :: {(a $\to$ a $\to$ b) $\to$ a $\to$ b}}\\\\\\
\Rightarrow\ & \lambda f.\lambda x.f\ x\ x\\\\\\
\Rightarrow\ & \lambda f.\lambda x.f\ x\ \text {(I } x)\\\\\\
\Rightarrow\ & \lambda f.\lambda x.\text{S $f$ I }x\\\\\\
=\_\eta\ & \lambda f.\text{S $f$ I}\\\\\\
\Rightarrow\ &\text {flip }\lambda f.(\text S\ f)\ \text I\\\\\\
=\_\eta\ & \text {flip S I}
\end{align\*}
$$

有 [pointfree.io](pointfree.io) 内味了。> w <

当然转换方法其实非常多，也非常自由，让我们试试用 `compose` 和 `flip ($)` 来写 `flip` ：

> `flip ($)` 太长了，就用 `rev` 代替了，同理，`compose` 用 `(.)` 代替

**flip:**
$$
\begin{align\*}&\  \text {flip :: {(a $\to$ b $\to$ c) $\to$ b $\to$ a $\to$ c}}\\\\\\
\Rightarrow\ & \lambda f.\lambda b.\lambda a.f\ a\ b\\\\\\
=\_\eta\ & \lambda f.\text {(.) (S $f$) K}\\\\\\
\Rightarrow\ &\lambda f.\text {rev K ((.) S $f$)}\\\\\\
\Rightarrow\ &\text {(.) (rev K) ($\lambda f$.(.) S $f$)}\\\\\\
=\_\eta \ &\text {(.) (rev K) ((.) S)}\\\\\\
\end{align\*}
$$
感觉这东西就像函数式编程里的 `brainfuck` ; )










