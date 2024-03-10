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
g(x ) = u_0+u_1x+u_2x^2+\cdots + u_nx^n+\cdots. \tag{1}
$$

Suppose that there is another generating function:

$$
f(x)=v_0+v_1x+v_2x^2+\cdots + v_nx^n+\cdots. \tag{2}
$$


It's easy to find that we can define the multiply two generating functions the way we define convergence:

$$
g(x)h(x)= w_0 +w_1x+w_2x^2+\cdots+w_nx^n+\cdots. \tag{3}
$$

where for every $n=1,2,3,\cdots,$

$$
w_n=u_0v_n+u_1v_{n-1}+\cdots+u_{n-1}v_1+u_nv_0. \tag{4}
$$

even if the generating functions are not convergent.

## Character Polynomial

Suppose that a sequence $u_0,u_1,\cdots,u_n,\cdots$ satisfies the recurrence of $r$th order:

$$
u_{n+r}=a_1u_{n+r-1}+a_2u_{n+r-2}+\cdots+a_ru_{n},\quad  n=0,1,2,\cdots. \tag{5}
$$

where $a_i,i=1,2,\cdots,r$ are constants. Let g(x) be the generating function for the sequence $\{u_n\}$. Specifically:

$$
g(x)=u_0+u_1x+u_2x^2+\cdots+u_nx^n+\cdots. \tag{6}
$$

We take k(x) as the polynomial:

$$
k(x)=1-a_1x-a_2x^2-\cdots-a_rx^r, \tag{7}
$$

It's not hard to find that:

$$
g(x)k(x)=c_0+c_1x+\cdots+c_{r-1}x^{r-1}+c_rx^r=C(x), \tag{8}
$$

where $C(x)$ is the polynomial of degree no more than $r-1$, since that, for all $n\ge 0$, the coefficient in $C(x)$:

$$
c_{n+r}=u_{n+r}-a_1u_{n+r-1}-a_2u_{n+r-2}-\cdots-a_nu_n =0, \tag{9}
$$


With linear recurrence (5) we associate character polynomial $f(x)$ given by:

$$
f(x)=x^r-a_1x^{r-1}-\cdots -a_r. \tag{10}
$$

Without loss of generality, we shall assume $a_r\not = 0$, otherwise we may have a recurrence of $(r-1)$th oder.

Let the factorization of $f(x)$ into linear factor be:

$$
f(x)=(x-t_1)^{e_1}\cdots(x-t_s)^{e_s}, \quad e_1+e_2+\cdots + e_s=r. \tag{11}
$$

> We may assume $t_i \in \mathbb C,i=1,2,\cdots,s$. By the fundamental thereom of algebra, the equation will be well-defined.

By comparing $k(x)$ (7) and $f(x)$ (10), we find the equation:

$$
k(x)=x^rf(\frac{1}{x}). \tag{12}
$$

And corresponding to the factorization (11), we have:

$$
k(x)=(1-t_1x)^{e_1}\cdots(1-t_sx)^{e_s}, \quad e_1+e_2+\cdots + e_s=r. \tag{13}
$$

Since that $C(x)$ is the polynomial of degree at most $r-1$, smaller than the degree of $k(x)$, which is $r$. We may express the rational function $g(x)=\frac{C(x)}{k(x)}$ (8) in terms of partial fractions:

$$
\begin{align*}
g(x)=\frac{C(x)}{k(x)}
=\frac{\beta_{11}}{(1-t_1x)}+\cdots+\frac{\beta_{1e_1}}{(1-t_1x)^{e_1}}+\cdots+\frac{\beta_{s1}}{(1-t_sx)}+\cdots+\frac{\beta_{se_s}}{(1-t_sx)^{e_s}},
\end{align*}
$$

Use the $\sum$ notation to simplify the equation.

$$
g(x)=\sum_{i=1}^{s}\sum_{j=1}^{e_i}\frac{\beta_{ij}}{(1-t_ix)^{j}}=\sum_{i=1}^{s}\sum_{j=1}^{e_i}{\beta_{ij}}{(1-t_ix)^{-j}}, \tag{14}
$$

where $\beta$'s are appropriate constants. We may use 

$$
g(x)=\sum\beta(1-rx)^{-k}, \tag{15}
$$

to represent the formula.

It's easy expand every component of (15) by bionomial formula:

$$
\beta(1-rx)^{-k}=  \beta \sum_{n=0}^{\infty} C^{n+k-1}_{k-1} (rx)^n, \tag{16}
$$

Merge the polynomial according to the power of $x$. We may have an equation looks similar to this:

$$
g(x)=\sum_{n=0}^{\infty}\sum^{s}_{i=1}\sum^{e_i}_{j=1}\beta_{ij} C^{n+j-1}_{j-1}r^n_ix^n, \tag{17}
$$

We note that:

$$
\sum_{j=1}^{e_i}\beta_{ij}C^{n+j-1}_{j-1}t_i^{n}=P_i(n)t_i^n, \tag{18}
$$

where $P_i(n)$ is the polynomial of degree at most $e_i-1$ in $n$. Substituting back to (6), we have:

$$
\begin{align*}
g(x)&=\sum_{n=0}^{\infty} u_nx^n\\\\\\
&=\sum_{n=0}^{\infty}\sum_{i=1}^{s}P_i(n)t_i^nx^n, \tag{19}
\end{align*}
$$

By comparing the coefficient of $x^n$, we have

$$
u_n=\sum_{i=1}^{s}P_i(n)t_i^n. \tag{20}
$$

where $P_i(n)$ is degree at most $e_i-1$.


## Example

Suppose we have a recurrence:
$$
\begin{align*}
f_1&=3\\\\\\
f_2&=15\\\\\\
f_3&=45\\\\\\
f_{n+3}&=7f_{n+2}-16f_{n+1}+12f_n,
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

We shall assume that $f_n=(an+b)2^n+c3^n$

Substitute it by $f_1=3,f_2=15,f_3=45$:

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
f_n=3*2^nn-3^n.
$$


Let's check the 10th of the sequence, by the recurrence we get:

$f_{4}=111,f_5=237,f_6=423, f_7=501,f_8=-417,f_9=-5859,f_{10}=-28329$.

According to the general formula we get $f_{10}=3*2^{10}*10-3^{10}=-28329$.

