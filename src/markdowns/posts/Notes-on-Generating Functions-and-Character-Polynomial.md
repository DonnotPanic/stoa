+++
title = "Notes on Generating Functions and Character Polynomial"
date = 2020-09-14
katex = true
series = ["combinatorics","math"]
+++

# Notes on Generating Functions and Character Polynomial

## Generating Functions

Generating Functions are formal power series that play important roles in Combinatorics. Specifically， We may assume that a generating functions should look like this:

$$
g(x ) = u\_0+u\_1x+u\_2x^2+\cdots + u\_nx^n+\cdots. \tag{1}
$$

Suppose that there is another generating function:

$$
f(x)=v\_0+v\_1x+v\_2x^2+\cdots + v\_nx^n+\cdots. \tag{2}
$$


It's easy to find that we can define the multiply two generating functions the way we define convergence:

$$
g(x)h(x)= w\_0 +w\_1x+w\_2x^2+\cdots+w\_nx^n+\cdots. \tag{3}
$$

where for every $n=1,2,3,\cdots,$

$$
w\_n=u\_0v\_n+u\_1v\_{n-1}+\cdots+u\_{n-1}v\_1+u\_nv\_0. \tag{4}
$$

even if the generating functions are not convergent.

## Character Polynomial

Suppose that a sequence $u\_0,u\_1,\cdots,u\_n,\cdots$ satisfies the recurrence of $r$th order:

$$
u\_{n+r}=a\_1u\_{n+r-1}+a\_2u\_{n+r-2}+\cdots+a\_ru\_{n},\quad  n=0,1,2,\cdots. \tag{5}
$$

where $a\_i,i=1,2,\cdots,r$ are constants. Let g(x) be the generating function for the sequence $\{u\_n\}$. Specifically:

$$
g(x)=u\_0+u\_1x+u\_2x^2+\cdots+u\_nx^n+\cdots. \tag{6}
$$

We take k(x) as the polynomial:

$$
k(x)=1-a\_1x-a\_2x^2-\cdots-a\_rx^r, \tag{7}
$$

It's not hard to find that:

$$
g(x)k(x)=c\_0+c\_1x+\cdots+c\_{r-1}x^{r-1}+c\_rx^r=C(x), \tag{8}
$$

where $C(x)$ is the polynomial of degree no more than $r-1$, since that, for all $n\ge 0$, the coefficient in $C(x)$:

$$
c\_{n+r}=u\_{n+r}-a\_1u\_{n+r-1}-a\_2u\_{n+r-2}-\cdots-a\_nu\_n =0, \tag{9}
$$


With linear recurrence (5) we associate character polynomial $f(x)$ given by:

$$
f(x)=x^r-a\_1x^{r-1}-\cdots -a\_r. \tag{10}
$$

Without loss of generality, we shall assume $a\_r\not = 0$, otherwise we may have a recurrence of $(r-1)$th oder.

Let the factorization of $f(x)$ into linear factor be:

$$
f(x)=(x-t\_1)^{e\_1}\cdots(x-t\_s)^{e\_s}, \quad e\_1+e\_2+\cdots + e\_s=r. \tag{11}
$$

> We may assume $t\_i \in \mathbb C,i=1,2,\cdots,s$. By the fundamental thereom of algebra, the equation will be well-defined.

By comparing $k(x)$ (7) and $f(x)$ (10), we find the equation:

$$
k(x)=x^rf(\frac{1}{x}). \tag{12}
$$

And corresponding to the factorization (11), we have:

$$
k(x)=(1-t\_1x)^{e\_1}\cdots(1-t\_sx)^{e\_s}, \quad e\_1+e\_2+\cdots + e\_s=r. \tag{13}
$$

Since that $C(x)$ is the polynomial of degree at most $r-1$, smaller than the degree of $k(x)$, which is $r$. We may express the rational function $g(x)=\frac{C(x)}{k(x)}$ (8) in terms of partial fractions:

$$
\begin{align*}
g(x)=\frac{C(x)}{k(x)}
=\frac{\beta\_{11}}{(1-t\_1x)}+\cdots+\frac{\beta\_{1e\_1}}{(1-t\_1x)^{e\_1}}+\cdots+\frac{\beta\_{s1}}{(1-t\_sx)}+\cdots+\frac{\beta\_{se\_s}}{(1-t\_sx)^{e\_s}},
\end{align*}
$$

Use the $\sum$ notation to simplify the equation.

$$
g(x)=\sum\_{i=1}^{s}\sum\_{j=1}^{e\_i}\frac{\beta\_{ij}}{(1-t\_ix)^{j}}=\sum\_{i=1}^{s}\sum\_{j=1}^{e\_i}{\beta\_{ij}}{(1-t\_ix)^{-j}}, \tag{14}
$$

where $\beta$'s are appropriate constants. We may use 

$$
g(x)=\sum\beta(1-rx)^{-k}, \tag{15}
$$

to represent the formula.

It's easy expand every component of (15) by bionomial formula:

$$
\beta(1-rx)^{-k}=  \beta \sum\_{n=0}^{\infty} C^{n+k-1}\_{k-1} (rx)^n, \tag{16}
$$

Merge the polynomial according to the power of $x$. We may have an equation looks similar to this:

$$
g(x)=\sum\_{n=0}^{\infty}\sum^{s}\_{i=1}\sum^{e\_i}\_{j=1}\beta\_{ij} C^{n+j-1}\_{j-1}r^n\_ix^n, \tag{17}
$$

We note that:

$$
\sum\_{j=1}^{e\_i}\beta\_{ij}C^{n+j-1}\_{j-1}t\_i^{n}=P\_i(n)t\_i^n, \tag{18}
$$

where $P\_i(n)$ is the polynomial of degree at most $e\_i-1$ in $n$. Substituting back to (6), we have:

$$
\begin{align*}
g(x)&=\sum\_{n=0}^{\infty} u\_nx^n\\\\\\
&=\sum\_{n=0}^{\infty}\sum\_{i=1}^{s}P\_i(n)t\_i^nx^n, \tag{19}
\end{align*}
$$

By comparing the coefficient of $x^n$, we have

$$
u\_n=\sum\_{i=1}^{s}P\_i(n)t\_i^n. \tag{20}
$$

where $P\_i(n)$ is degree at most $e\_i-1$.


## Example

Suppose we have a recurrence:
$$
\begin{align*}
f\_1&=3\\\\\\
f\_2&=15\\\\\\
f\_3&=45\\\\\\
f\_{n+3}&=7f\_{n+2}-16f\_{n+1}+12f\_n,
\end{align*}
$$

the character polynomial is:

$$
x^3-7x^2+16x-12=0, 
$$

By solving the equation we get:

$$
(x-2)^2(x-3)=0, 
$$

We shall assume that $f\_n=(an+b)2^n+c3^n$

Substitute it by $f\_1=3,f\_2=15,f\_3=45$:

$$
\begin{align*}
(a+b)*2+c*3 &= 3\\\\\\
(2a+b)*4+c*9 &= 15\\\\\\
(3a+b)*8+c*27 &= 45,
\end{align*}
$$

Solve the equations:

$$
\begin{align*}
a&=3\\\\\\
b&=0\\\\\\
c&=-1.
\end{align*}
$$

Substitute the coefficient, we have the general formula

$$
f\_n=3*2^nn-3^n.
$$


Let's check the 10th of the sequence, by the recurrence we get:

$f\_{4}=111,f\_5=237,f\_6=423, f\_7=501,f\_8=-417,f\_9=-5859,f\_{10}=-28329$.

According to the general formula we get $f\_{10}=3*2^{10}*10-3^{10}=-28329$.

