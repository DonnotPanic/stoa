+++
date = "2018-09-23"
title ="五分钟学会快速数论变换"
katex = "true"
series = ["combinatorics","algorithm","programming","C++"]
+++


>注，本文章是18年的旧文，是我刚学C++时所写。

### 前置: 快速幂取模


快速计算$\ a^b (mod\ m)$
**原理:**  取模运算的结合率 $x*y(mod\ m)\ =\ x(mod\ m)*y(mod\ m )$

**快速算法:** b为偶数时，可将$a^b$拆分成$a^\frac{b}2*a^\frac{b}2$分别取模，将复杂度降低为$O(\log_{2}N)
$

**代码(C++):**

```c++
int quick_mod (int a, int b, int m) {
    int ans = 1;
    a %= m;
    while (b) {
        if (b & 1) {
            ans = ans * a % m;
            b--;
        }
        b >>= 1;
        a = a * a % m;
    }
    return ans;
}
```


## 正题

我们都知道朴素卷积算法：

$$
c_n = \sum\_{i=0}^{n} a\_ib\_{n-i}
$$

$$
C(x) = \sum_{j=0}^{2n-2} c\_jx^j
$$
复杂度O($N^2$), 应对超大数乘法时明显太慢。有没有什么办法提高计算速度呢？

### 引入函数的点值法表示

对于任意函数$A(x)=\sum_{i=0}^nax^i$
任取n+1个不同的值$x_0,x_1\cdots x_n$，代入A(x)中，点值对构成集合$\{(x_0,A(x_0)),\ (x_1,A(x_1)), \cdots\ (x_n,A(x_n))\}$

不难发现这样的点值对集合和该函数是唯一对应的。

从矩阵角度理解：

传统的系数表示法可表示为两个向量点积：

(这里为了偷懒（不转置）就反过来写了>～<)

$$
A(x)=
\left[
\begin{matrix}
x^0&x^1&\cdots&x^{n-1}
\end{matrix}
\right]
\left[\begin{matrix}
a_0&a\_1&\cdots&{a\_{n-1}}
\end{matrix}\right]^T
$$

而点值表示法：

![](https://cdn.mathpix.com/snip/images/C5uYCKpaMjIMuV6cKJ4h3Px6Z-e0DmWRey55a2vdMl4.original.fullsize.png)


也即b=Ax的形式。如果$A^{-1}$存在，即A为非奇异矩阵，就可以通过逆矩阵$A^{-1}$,得到系数向量$x=A^{-1}b$。

两种状态间可以自由转换。

问题就转化为找到这样一个非奇异矩阵。

把A看作一个线性变换，既然$x_i$和$A(x_i)$一一对应

$$
\{x_i\}\leftrightarrow \{A(x_i)\}
$$

毫无疑问存在一个从\{A(x)\}到\{x\}的映射，抵消了A的效果
即存在$A^{-1}$。

如果你对LA有所了解，你应该知道:

矩阵非奇异的充要条件是它所代表的线形变换是自同构的(或者说可逆的)。

你现在可能一头雾水，心想这沙雕在说些啥，请不要着急，保持耐心。

数值乘法的优点在于对于C(x)=A(x)B(x)你不用考虑x有多少项，一股脑算出来乘出来就好了。

目前而言这个方法比传统卷积还复杂，但如果我们掌握了特殊的乘法技巧，那就不一样了。

对于多项式$A(x)=\sum_{i=0}^{n-1}a_ix^i$可以按奇偶拆分成

$$
A(x)=\sum_{i=0}^{\frac{n}{2}-1}a\_{2i} x^{2i} +x\sum\_{i=0}^{\frac{n}{2}-1}a\_{2i+1}x^{2i}
$$

到目前为止平平无奇，因为我们还没找到合适的x。是时候让问题变得$\mathbb C$omplex了。= u =


### 首先引入单位根的概念：

单位根可以看作一个在复平面绕原点逆时针旋转的长度为1的向量的最小旋转因子：

$$
\omega _n^k=e^{i\frac{2k\pi}{n}}
$$

熟悉欧拉公式的你应该不难发现其实就是

$$
\omega _n^k=cos(\frac{2k\pi}{n})+i\ sin(\frac{2k\pi}{n})
$$

我们不难发现单位根满足以下性质：
1. $\omega_n^{k+\frac{n}{2}}=-\omega_n^{k}$ 这是过于显然的结论。

2. 折半性$(\omega _n^k)^2=\omega _{\frac{n}{2}}^k$证明从三角或是e^x出发都行。

3. $\sum_{i=0}^{n-1}(\omega_n^k)^i=0$ 证明可以从复数根旋转的角度理解,证明矢量和为0。

4. 如果$a\equiv b\ (mod\ n)$,那么$\omega _n^a=\omega _n^b$

5. 如果$a\not\equiv b\ (mod\ n)$,那么$\omega_n^a\not=\omega_n^b$

这些性质十分重要，我们后面还会提到其应用。


有了复数的加入，一切又变得简单起来。

我们不妨另n为2的方幂（如果不够就往高位补0），前面提到：

$$
A_1(x)=\sum\_{i=0}^{\frac{n}{2}-1}a\_{2i}x^{2i}+x\sum\_{i=0}^{\frac{n}{2}-1}a\_{2i+1}x^{2i}
$$

让我们把$\omega_n^k$代入试试？

$$
A(\omega_n^k)=\sum\_{i=0}^{\frac{n}{2}-1}a\_{2i}\omega\_n^{2ki}+\omega\_n^k\sum\_{i=0}^{\frac{n}{2}-1}a\_{2i+1}\omega_n^{2ki}
$$

分别令$A_0$和$A_1$代表偶数项系数和奇数项系数，由上述第2条折半性，整理一下，得到:

$$
A(\omega_n^k)=A\_0(\omega\_{\frac{n}{2}}^{ki})+\omega\_n^kA\_1(\omega\_{\frac{n}{2}}^{ki})
$$

利用一下性质1

$$
A(\omega_n^{k+\frac{n}{2}})=A\_0(\omega\_{\frac{n}{2}}^{ki})-\omega\_n^kA\_1(\omega\_{\frac{n}{2}}^{ki})
$$

差不多的计算量，一次得到两个值，酷不酷o_o？（这个操作又被称作蝶形计算）

聪明的你此时应该意识到为什么要让n为2的方幂了吧。


接下来我们要把点值法表示函数改回系数表示法啦

（10进制情况我们只需要让系数满10进1就好啦，就像我们做小学乘法时那样）

让我们回顾一下：

点值表示法：

![](https://cdn.mathpix.com/snip/images/fIq8OHxhBAacz2X5cAGFlYOnp0SsnJAwsP9eMTv9gwA.original.fullsize.png)

我们要求的逆矩阵也就是:

![](https://cdn.mathpix.com/snip/images/n2UJZ_HG0m0UpYHwjsye1eSzjjjwLVlUIePFZEvdcDE.original.fullsize.png)

这个过于显然了吧，除了对角线元素，其余元素由性质3肯定会变回0，不信的话您可以自个儿证一下。

恭喜。此时你差不多可以写出FFT的递归写法啦！

FFT的复杂度是O(n log n)比朴素卷积算法快多啦！

但是递归太占内存，如果能改写成迭代就更好啦！= v =_y

注意到每次递归时我们都将系数下标分奇偶，奇数在后，偶数在前，从最后一位开始比，逐渐往前比

举个例子000，001，010，011，100，101，110，111

先分最后一位奇偶：

000 010 100 110 ；001 011 101 111

再分倒数第二位：

000 100；010 110；001 101；011 111

再分第一位：

000；100；010；110；001；101；011；111

此时他们的位置用二进制表示：

000；001；010；011；100；101；110；111

聪明的你一定发现啦。没错，下标的二进制翻转就是它开始计算的次序啦，那么你一定想到了，如果我们实现将位置在计算前调整好就可以直接用迭代的方法计算啦；

下面提供这部分的代码：

```c++
//此时len以及调整为2的方幂。
void rader(int a[], int len) {
    int j = len >> 1;
    for (int i = 1; i < len - 1; i++) {
        //按下标翻转
        if (i < j) swap(a[i], a[j]);
        //不断二分
        int k = len >> 1;
        while (j >= k) {
            j -= k;
            k >>= 1;
        }
        if (j < k) j += k;
    }
}
```

放个FFT的模板：

```c++
void FFT(int *a, int len, int on) {
    rader (a, len);
    for (int j = 2; j <= len; j <<= 1) {
        Complex wn(cos(on*2*pi/j),sin(on*2*pi/j));
        for (int k = 0; k < len; k += j) {
            Complex w(1,0);
            for (int l = k; l < k + j / 2; l++) {
                Complex x = a[l];
                Complex y = w * a[l + j / 2];
                a[l] = x + y;
                a[l + j / 2] = x - y;
                w = w * wn;
            }
        }
    }
    if (on==-1) {
        for (int j = 0; j < len; j++)
            y[j].re /= len;
}
```

但是浮点型的计算怎么能满足各位对精度和速度的要求呢？

所以接下来，我们将在FFT的基础上做点改进，是时候让数论登场啦！

### NTT来啦！

首先我们得明白什么叫原根：

先看下wiki的定义：

In modular arithmetic , a branch of number theory, a number *g* is a **primitive root modulo n** if every number *a* coprime to *n* is congruent to a power of *g* modulo *n*.

简单翻一下——

在模运算中，g是n的原根，如果每一个与n互质的数a与g的某次方关于n同余。

简单点说，当k取遍所有数，g的k次方在模n的情况下必定会遍历所有除0以外的所有余数。

学过群论的应该知道，g其实就是整数模n乘法群的生成元。

下面我们来证明在$g^k(mod\ n)$遍历1～(n-1)前不会出现两个相同的数

假设$g^{k_1}\equiv g^{k_2}(mod\ n)=m$，
显然$g^{k_1+1}(mod\ n)=(g(mod\ n)*g^{k_1}(mod\ n))(mod\ n)=(g(mod\ n)*m)(mod\ n)$

$$
g^{k_{2}+1} (mod\ n) = (g (mod\ n) * g ^ {k\_{2}} (mod\ n)) (mod\ n) = (g(mod\ n) * m) (mod\ n)
$$

$$
g^{k\_{1}+1}\equiv g^{k\_2+1} (mod\ n)
$$

显然对于$k_2$后的任意k都必然与前面某个$g^{k_i}$同余,$g^k(mod\ n)$不能遍历1～(n-1),与g是n的原根矛盾。

我们不难发现其实$g^1$，$g^2$，$\cdots g^{n-1}$在$mod\ n$情况下刚好遍历了1～(n-1)

根据容斥原理$g^n$必然与前n-1中的某个同余,

因为$g^1,g^2,\cdots g^{n-1}$在$mod\ n$情况下余数不同,

最小循环单位为n-1，所以$g^n$必然与g同余，相应的，$g^{n-1}(mod\ n)=1$

**这是我们的第一个结论**

**同时我们得到了第二个结论**，如果$a\not\equiv b(mod\ n)$,那么$g^a\not\equiv g^b(mod\ n)$

**以及第三个结论**：如果$a\equiv b(mod\ n)$,那么$g^a\equiv g^b(mod\ n)$

下面我们用**P**来表示这个n。

事实上我们采用的不是$g^{1,2\cdots,n}$而是$g^{\frac{P-1}{l}}$，l为数的长度向上取整的2的方幂

这个n并非任取的，它必须满足$P=k*2^q+1$，而且是一个质数

这样$g^{\frac{P-1}{l}}$也就拥有了折半性。

有了折半性就可以分治，我们可以按照类似FFT的方法处理。

接下来还有两个性质需要证明：

1.$g^{\frac{(P-1)k}{l}+\frac{P-1}{2}}\equiv-g^{\frac{(P-1)k}{l}}(mod\ P)$

另$g^{\frac{(P-1)k}{l}}(mod\ P)=m$，故$g^{\frac{(P-1)k}{l}+\frac{P-1}{2}}=m*g^{\frac{P-1}{2}}(mod\ P)$

下证$g^{\frac{P-1}{2}}\equiv -1(mod\ P)$：

之前我们已经证明了$g^{P-1}\equiv1(mod\ p)$，即$g^{P-1}-1$能被P整除

$$
g^{P-1}-1=(g^{\frac{P-1}{2}}-1)(g^{\frac{P-1}{2}}+1)
$$

所以$g^{\frac{P-1}{2}}(mod\ P)$要么等于1要么等于-1。

根据第二个结论我们知道$g^{\frac{P-1}{2}}(mod\ P)\not=1$

证毕

2.$\sum_{i=0}^{l-1}(g^{\frac{(P-1)k}{l}})^i(mod\ P)=0$

整理一下，得到$g^k*\sum_{i=0}^{l-1}g^\frac{(P-1)i}{l}(mod\ P)=0$

考虑到$g^{P-1}(mod\ p)=1$，利用等比数列求和，不难发现

$$
\sum_{i=0}^{l-1} g^\frac{(P-1)i}{l} (mod\ P)=0
$$

得证

到这里您应该差不多发现了：

在模P情况下$g^{\frac{(P-1)k}{l}}$的乘法运算，与$\omega _l^k$在复数集的乘法运算是等价的。
换言之你可将前者看作在在模P运算下，在$g^1$，$g^2$，$\cdots g^{n-1}$这n-1个余数构成的离散的“圆”里旋转。

您自然会联想到其实NTT的思路和FFT是一样的，除了将复数乘法改成模P乘法。

一对比较常用的数：

$$
P = 479*2^{21}+1
$$

$$
g = 3
$$

P又被称作费马素数。

再次强调所有的运算**必须得在模P的背景下**才能成立。

同样的接下来我们要找相对应的逆变换，我想你该猜个八九不离十了：

$$
x_k=\frac{1}{l}g^{-\frac{(P-1)k}{l}}X_k（mod\ P）
$$


你看，数学真简单，这不和单位根一毛一样嘛。: P

然后等你兴冲冲想编个ntt玩玩时就傻眼了。

这不是浮点数，而是整数，整数取模状态下的除法运算咋做啊？（百度，费马小定理，默认大家都会了）: )


$$
接下来应该解决$g^{-\frac{(P-1)k}{l}}$这个问题啦

我们在前面已经证明了$g^{P-1}(mod \ P) = 1$

所以$g^{-\frac{(P-1)k}{l}}\equiv g^{\frac{(P-1)(l-k)}{l}}(mod\ P)$

可以注意到$A_{[k][l-k]}$才为1,而不是像FFT中对角元素为1,所以最后x[k]和x[l-k]互换了位置

是的，这点一定要引起注意，因为INTT得到的不是单位矩阵，运算完一定要交换x[k]和x[l-k]


大体模板和FFT一模一样，不赘述了。

以上过程也可以从crs（中国剩余定理）的角度理解。但是我懒得打了。

PS：NTT对快速模需求巨大，而且涉及的运算多为*2和/2，用>>和<<会快得多。



### 附录
#### 拷贝来的代码
```c++
#include <iostream>
#include <string.h>
using namespace std;
typedef long long LL;

const int N = 1 << 18;
const int P = (479 << 21) + 1;
const int G = 3;//P的原象

LL  wn[20];
LL  a[N], b[N];
char A[N], B[N];
//快速幂
LL quickmod(LL a, LL b, LL m);
void getwn();
//用0补位至2的幂次，将字符串转化为整数组
void prep(char A[], char B[], LL a[], LL b[], int &len);
//预处理，将数位按其下标翻转
void rader(LL a[], int len);
//b=1,NTT,b=0做逆变换
void NTT(LL a[], int len, bool b);
//计算乘积
void calc(LL a[], LL b[], int n);
//满10进位
void trans(LL a[], int n);
//从第一个非0开始输出
void Print(LL a[], int n);

int main() {
    int num = 1;
    getwn();
    while (scanf("%s %s", A, B) != EOF) {
        cout << "Case " << num++ << ": " << A << "*" << B << "=";
        int len;
        prep(A, B, a, b, len);
        calc(a, b, len);
        trans(a, len);
        Print(a, len);
    }
    return 0;
}


LL quickmod(LL a, LL b, LL m) {
    LL ans = 1;
    a %= m;
    while (b) {
        if (b & 1) {
            ans = ans * a % m;
            b--;
        }
        b >>= 1;
        a = a * a % m;
    }
    return ans;
}

void getwn() {
    for (int i = 0; i < 20; i++) {
        int t = 1 << i;
        //wn[i] = G ** (P-1)/t (mod P),这样的wn满足对分，互异，总和为0等条件。
        wn[i] = quickmod(G, (P - 1) / t, P);
    }
}

void prep(char *A, char *B, LL *a, LL *b, int &len) {
    len = 1;
    int La = strlen(A);
    int Lb = strlen(B);
    //len必为2的幂次
    while (len <= 2 * La || len <= 2 * Lb) len <<= 1;
    for (int i = 0; i < len; i++) {
        if (i < La) a[i] = A[La - i - 1] - '0';
        else a[i] = 0;
        if (i < Lb) b[i] = B[Lb - i - 1] - '0';
        else b[i] = 0;
    }
}

void rader(LL *a, int len) {
    //rader算法提供了码位倒序的进行交换的方法
    int j = len >> 1;
    for (int i = 1; i < len - 1; i++) {
        if (i < j) swap(a[i], a[j]);
        int k = len >> 1;
        while (j >= k) {
            j -= k;
            k >>= 1;
        }
        if (j < k) j += k;
    }
}

void NTT(LL *a, int len, bool b) {
    rader (a, len);
    int i = 0;
    for (int j = 2; j <= len; j <<= 1) {
        i++;
        for (int k = 0; k < len; k += j) {
            LL w = 1;
            for (int l = k; l < k + j / 2; l++) {
                //蝶形操作
                LL x = a[l] % P;
                LL y = w * a[l + j / 2] % P;
                a[l] = (x + y) % P;
                a[l + j / 2] = (x - y + P) % P;
                //也可以看作crs合并
                w = w * wn[i] % P;
            }
        }
    }
    if (!b) {
        //翻转数组
        for (int j = 1; j < len / 2; j++)
            swap(a[j], a[len - j]);
        //乘逆矩阵
        LL inv = quickmod(len, P - 2, P);
        for (int k = 0; k < len; k++)
            a[k] = a[k] * inv % P;
    }
}

void calc(LL *a, LL *b, int n) {
    NTT(a, n, 1);
    NTT(b, n, 1);
    for (int i = 0; i < n; i++)
        a[i] = a[i] * b[i] % P;
    NTT(a, n, 0);
}

void trans(LL *a, int n) {
    int jw = 0;
    for (int i = 0; i < n; i++) {
        a[i] += jw;
        if (a[i] > 9) {
            jw = a[i] / 10;
            a[i] %= 10;
        }
        else jw = 0;
    }
}

void Print(LL *a, int n) {
    //从第一个非0数开始输出
    bool flag = 1;
    for (int i = n - 1; i >= 0; i--) {
        if (a[i] != 0 && flag) {
            cout << a[i];
            flag = 0;
        }
        else if (!flag)
            cout << a[i];
    }
    puts("");
}
```

