+++
date = "2018-10-11"
title ="Warshall算法简述"
katex = "true"
series = ["algorithm","C++"]
+++



> 虽然Warshall可以在边为负值的加权图中求最短路，但是图中不能有**权重为负**的**圈**。
>
> 使用Warshall算法会求出所有顶点间的最短路。
>
> Warshall同样适用于求关系的传递闭包和找到顶点间的最大路径。

书中提到的Floyd-Warshall是用于求关系$R$的传递闭包

那么我们先从书上的例子开始吧

## 传递闭包

首先是传递闭包的定义，这个书上有，简单说明一下

给定集合$X$上二元关系集合$R$，其传递闭包是在包含$R$的$X$上的最小的传递关系

Warshall算法会遍历所有顶点，对于其中任意顶点$k$以前的$1～k$个点

此时传递闭包上的关系分两种情况

1. 无需经过顶点$k$原本就存在的关系（包括原本在$R$中就有的1~$k$-1上的关系和在之前借助1~$k$-1得到的新关系）

2. 经过顶点$k$作为中转得到的新关系

假定函数`relation(i,j,k)`返回是否存在从顶点$i$到顶点$j$的关系，那么

relation(i, j, k) = relation (i, j, k-1) || ( relation(i, k, k-1) && relation(k, j, k-1) )

```C++
//bool W[n][n]是集合X上的关系矩阵W
bool R[n][n] // R是W的传递闭包
for (int i = 0; i < n; ++i){  //将W复制到R
    for (int j = 0; j < n; ++j){
        R[i][j] = W[i][j];
    }
}
for (int k = 0; k < n; ++k){
    for (int i = 0; i < n; ++i){
    	for (int j = 0; j < n; ++j){
        	R[i][j] = R[i][j] || (R[i][k] && R[k][j];
    	}
	}
}
```

考虑一下一个共$V$个顶点的图上至多有$V^2$条边那么只需要最多经历$V^3$（遍历每一个点并遍历与它之前的$V^2$个关系）次比较就能够遍历所有可能的组合了，所以Warshall算法复杂度是$\Theta (|V|^3)$。

## 求最短路径

类似的，考虑图$G$，其上的$N$个顶点以及最短路函数`shortestPath(i,j,k)` 返回顶点$i$到顶点$j​$上的最短路径。

同样shortestPath(i, j, k)得到的最短路径有两种情况

1. 在shortestPath(i, j, k-1)就有的最短路径
2. 通过shortestPath(i, k, k-1)和shortestPath(k, j, k-1)得到的最短路径

所以得到
$$
shortestPath(i, j, k) = min( shortestPath(i, j, k-1) , shortestPath(i, k, k-1)+shortestPath(k, j, k-1))
$$
同理

```C++
//int edge[n][n] 是图G上的边
int dist[n][n]
for (int i = 0; i < n; ++i){  
    for (int j = 0; j < n; ++j){
        dist[i][j] = edge[i][j];
    }
}
for (int k = 0; k < n; ++k){
    for (int i = 0; i < n; ++i){
    	for (int j = 0; j < n; ++j){
    		if(dist[i][j] > dist[i][k] + dist [k][j])
        		dist[i][j] = dist[i][k] + dist [k][j];
    	}
	}
}
```



用同样的方法可以求最大路径，如何求交给读者留作练习。

