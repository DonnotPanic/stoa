+++
date = "2021-01-19"
title =  "Head First Lexical Analysis(1)"
katex = true
series = ["lexer"]
+++

In general, lexical analysis is the process that transform the input source program to token stream, which later will be used by parser to produce syntax tree.

Nowadays, a technique called **Parser Combinator** may blur the boundary between parsers and lexers. However, how to use a **Parser Combinator** efficiently still demands a good knowledge of lexers. Besides, a **Parser Combinator** is **LL(k)**, that means you have to manually eliminate left recursion. If you want to use some other parsers like **LALR** or if you don't know how to write good **Regular Expression**, do some lexical analysis would be inevitable.

# Lexical Analysis in General

Generally speaking, the process of lexical analysis contains five parts:

- Define language tokens using regular expressions
- Convert the regular expressions into NFA
- Convert NFA to DFA
- Simplify DFA to minimal DFA
- Convert minial DFA to scanner

As a head first style tutorial, we may assume the readers have little or no knowledge of automata theory. This material is self-contained.

# Basic Concepts

You might have seen this picture before:

{{< rawhtml >}}
<center><img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chomsky-hierarchy.svg" alt="Chomsky Hierarchy" style="zoom:50%;" /><br/>
<b>Fig 1: Chomsky Hierarchy</b></center>
{{< /rawhtml >}}

It is called the **Chomsky Hierachy**, a containment hierarchy of formal grammars.

Before we go deeper into it, we should know some basic concepts of `language` and `automaton`.

An automata is nothing but some states and rules on it that determines the way we transists between these states.

An **alphabet** is a set of some symbols. A **language** is the subset of *kleene clousure of an given alphabet*, the set of all possible combinations of these symbols. The elements of language must be ended with a so-called **terminator**. We call the elements of the language **words**. 

And we may find the process of generating a language correspends to some kind of automata. In other word, we may use an automata to detect all the words in a languge. An automata must consist initial states, final states/accept states, symbols which will be concatenated into words, and the rules that determine the way we transits between various states while producing some symbols. This rules is called *transition function*, and it is usually represented as triple (from_state, output_symbol, to_state) or as function (from_state, symbol) -> to_state.

The Chomsky hierarchy somehow reveals us the corresponding relationship between automaton and language with the restriction getting stronger and stronger.

| Grammar | Languages              | Automaton                                       | Production rules                             |
| ------- | ---------------------- | ----------------------------------------------- | -------------------------------------------- |
| Type-0  | Recursively enumerable | Turing machine                                  | $\gamma \to \alpha$                          |
| Type-1  | Context-sensitive      | Linear-bounded non-deterministic Turing machine | $\alpha A \beta \to \alpha \gamma \beta$     |
| Type-2  | Context-free           | Non-deterministic pushdown automaton            | $A \to \alpha$                               |
| Type-3  | Regular                | Finite state automaton                          | $A \to$ a<br/> and <br /> $A\to$a$B$ |

Every symbol in Profuction rules represents a set of strings. In detail:
- a = terminal
- $A$, $B$ = non-terminal
- $\gamma$ = never empty string of terminals and non-terminals
- $\alpha$, $\beta$ = maybe empty string of terminals and non-terminals

The non-terminal means this production part is somewhat recursive , it can be replaced again and again until it is finally replaced by a terminal.

As you see, from type-0 to type-3, the production rules get less and less flexible. The recursively enumerable language is something you go whatever way you want, just remember to stop in the end. However, the context-sensitive language, you must start from a set of strings that contains a part which is non-terminal and the $\alpha$ and $\beta$ will determine whether the inner part $A$ could be replaced by $\gamma$ so that you could stop, in other word, it is monotonous. The context-free language remove the felxibility from $\alpha$ and $\beta$. And the regular language is the most strict one, the generating of strings must only be right recursive.

As for recursively enumerative language, it is equivalent to a Turing machine, which we don't care that much since this is a blog on lexical analysis rather than some introduction to automaton theory. Knowing that Turing machine is a tape head moving unbounded ly on an infinite tape would be just enough. The same to context-sensitive languge which we know that it corresponds to **LBA (Linear Bounded Automata)** and it restricts the length of the tape to be no more than its alphabet plus two endmarks on both ends. The CFG (context-free grammar) is something important for a parser, we wouldn't go that far by now, just roughly go through it. 

We know how to recognize Context-free grammar very well by **PDA (Pushdown Automata)**. A Pushdown Automata is somewhat close to the computation model in CS. It contains an input tape, a finite control (transition function) and, what's more, a stack. The top of the stack determines the transition.

And now it's regular language. We will discuss it thoroughly in the rest of this blog.

# Regular Expression

In short, regular expression are what we use to denote regular language for the sake of succinctness. Remember that regular expression is right recursive? For any word that is regular, it is either generated sequencely if we choose different element from $A$ and $B$, or it maybe a loop if we choose the same one, or the combination of them.

So we have the basic operators in regular expression. We may have  three of them to work perfectly well, however, for convenience, we adapt some other.

1. $\epsilon$: an empty expression. 
2. Concatenation (r1$\cdot$r2): first r1, then r2. We would omit ($\cdot$)  normally.
3. Union (r1|r2​): either r1​ or r2. 
4. Kleene Star (r1)\*: zero or more r1.
5. (r1)+ = r1$\cdot$(r1)\*: one or more r1.
6. (r1)? = $\epsilon$ | r1: zero or one r1.

For instance if you want to express {lex, lexical, love, like, likely}, you may write something like: `l(ex(ical)?|ove|ike(ly)?)` or simply:`l*`

The latter contains much more words that the former, however, both of them can match these given words.

# RE to NFA

As we said before, RE (Regular Expression) corresponds to a FSA (Finite State Automata). But let's start with the conversion of NFA (Non-deterministic Finite Automata)

## Thompson's methods

According to Thompson's construction. By using $\epsilon$-transition, one can easily convert any RE to NFA. Rules are rather simple:

> For all states, there is a loop on it which output an $\epsilon$.

The **empty-expression** is convert to：

{{< rawhtml >}}
<center>
<img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Thompson-a-symbol.svg/278px-Thompson-epsilon.svg.png" alt="inline" />
</center>
{{< /rawhtml >}}

> The arrow points to q with new previous node means that q is the initial states, as we go from q to f, which is rounded by two circles denoting that f is the final states, we will output $\epsilon$, an empty-expression.

Similarly, a symbol a is converted to:

{{< rawhtml >}}
<center>
<img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Thompson-a-symbol.svg/278px-Thompson-a-symbol.svg.png" alt="inline" />
</center>
{{< /rawhtml >}}

Union expression (|) is converted to:


{{< rawhtml >}}
<center>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Thompson-or.svg/453px-Thompson-or.svg.png" alt="inline" style="zoom: 67%;" />
</center>
{{< /rawhtml >}}

Concatenation expression ($\cdot$) is converted to:

{{< rawhtml >}}
<center>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Thompson-concat.svg/398px-Thompson-concat.svg.png" alt="inline" style="zoom:67%;" />
</center>
{{< /rawhtml >}}

Kleene star expression (\*) is converted to:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Thompson-kleene-star.svg/503px-Thompson-kleene-star.svg.png" alt="inline" style="zoom:67%;" />

While being managed to convert, the large amount of intermediate states and abusion of $\epsilon$-transition makes it completely unusable, since any given strings must contain infinite $\epsilon$.

## Impovement on Thompson's Construction

However, here is the good new, any NFA with $\epsilon$ can be converted to NFA without $\epsilon$. And let's find out how's the method gonna work.

In general, it will be finished in three steps:

1. Find out all $\epsilon$ transition from each state. That is called $\epsilon$-closure. In other word, all the possible states reachable within $\epsilon$-transition.
2. Obtain a new transition function, which is the $\epsilon$-closure of previous transition act on each $\epsilon$-closure of previous nodes.
3. Use the resultant states to replace original states.

Example:

Suppose there is a RE: `l(mao|ol)`.

First, construct a NFA with $\epsilon$:

{{< rawhtml >}}
<center>
<img src="/lexical_analysis/lexical_analysis_3.png" style="zoom:50%;" />
</center>
{{< /rawhtml >}}

Then find all the $\epsilon$-closure.

| States | $\epsilon$-closures | States | $\epsilon$-closures |
| ------ | ------------------- | ------ | ------------------- |
| r0     | r0                  | r5     | r5,f                |
| r1     | r1,r2,r6            | r6     | r6                  |
| r2     | r2                  | r7     | r7                  |
| r3     | r3                  | r8     | r8,f                |
| r4     | r4                  | f      | f                   |

The new transition function is obtained by $\delta'(r,x)=\epsilon\text{-closure}(\delta(\epsilon\text{-closure}(r),x))$.

And the new one will be similar to previous one except on r0, r1, r5 and r8.

$\delta'(r0,l)=\\{r1,r2,r6\\}$, $\delta'(r1,m) = \\{r3\\}$, $\delta'(r1,o)=\\{r7\\}$, $\delta'(r5,\\\_)=\empty$, $\delta'(r8,\\\_)=\empty$

So the final NFA looks like this:

{{< rawhtml >}}
<center>
<img src="/lexical_analysis/lexical_analysis_4.png" style="zoom: 50%;" />
</center>
{{< /rawhtml >}}

Yes, there is no $\epsilon$-transition at all. But this is a bad NFA since there is still so many unneccessary states on it!

## Berry-Sethi Algorithm

There is another method called Glushkov's construction which says we need no more than M+1 states in our NFA (M is the number of all characters in our RE). However, I'm not going to talk about his original methods directly, but give an equivalent version of it, called Berry-Sethi algorithm which is more understandable.

> This version is strongly connected to Brzozowski Derivatives, which will show up again when we talk about DFAs.

To illustrate this algorithm, why not take `(ab)*b(a|b)` as the example.

The main concept of Berry-Sethi is to use ($\cdot$) as separator so as to divide-and-conquer. In detail, such a RE could be viewed as a tree:

{{< rawhtml >}}

<div style="flex: 0 1 auto; "><center><img src="/lexical_analysis/lexical_analysis_1.svg" style="zoom: 67%;"  />
  <img src="/lexical_analysis/lexical_analysis_2.svg" style="zoom: 67%;"  /></center></div>

{{< /rawhtml >}}

For convenience, the tree are labeled with numbers like.

For a given string, to check whether it is valid according to this RE. We will go downwards the tree and see whether the leaf euqals to the character in the string, after that, go upwards to the next possible leaf. In this process, the ups and the downs are seperated by leafs (or (\*) which means we could neglect this part). And by ($\cdot$), which means we have to traverse its left child and then its right child, this process is divided into several subprocesses.

First, it's important like to know whether a subprocess is negelectable, if some subprocess is negelectable, it either is (\*) or have neglectable children. We define Empty\[\] for each node and traverse it in postorder so that:​
- Empty\[$\epsilon$\] = true
- ​Empty\[x\] = false (x is an arbitrary leaf)
-​ Empty\[r1\*\] = true
- ​Empty\[r1|r2\] = Empty\[r1\] or Empty\[r2\]
- Empty\[r1$\cdot$r2\] = Empty\[r1\] and Empty\[r2\]

> Since the $\epsilon$ will be eliminated at last, we should define (?) too.


- Empty\[r1?\] = true

For this case, the Empty set is {false, true, false, false, false, false, false, false, false, false}

Next, we concern about the sets of possible leafs it may touch first after we go downstair to this node. And we need to know its children to help us find it out. Thus, we may traverse the tree in postorder again. We define First\[\] for each node:
- First\[$\epsilon$\] = $\empty$
- First\[x\] = {x}
- First\[r1*\] = First\[r1\]
- First\[r1?\] = First\[r1\]
- First\[r1|r2\] = First\[r1\] $\cup$ First\[r2\]
- First\[r1$\cdot$r2\] = First\[r1\] $\cup$ First\[r2\]	(if Empty\[r1\] = true)
- First\[r1$\cdot$r2\] = First\[r1\]			(if Empty\[r1\] = false)

The First set of given tree is {{5,7},{7},{5},{7},{5},{9,10},{7},{8},{9},{10}}

Finally, the possible leafs it may reach after traversing current subtree. For the root, there is nothing more left, just $\empty$. For other part, it depends on context. In general, passing the information top-down. Remember we are actually leaving this subtree? We are moving upwards till we reach another subproccess which has a non-empty First set. This information should be passed down, so this is a preorder traversing. We use Next\[\] to denote. 

> To discuss $\epsilon$ would just be pointless, this is a top-down traversing.

| r           | Equlaities                                                   |
| ----------- | ------------------------------------------------------------ |
| r1*         | Next\[r1\] = First\[r1\] $\cup$ Next\[r\]                          |
| r1?         | Next\[r1\] = Next\[r\]                                           |
| r1\|r2      | Next\[r1\] = Next\[r\]<br />Next\[r2\] = Next\[r\]                   |
| r1$\cdot$r2 | Next\[r1\] = First\[r2\] $\cup$ Next\[r\] if Empty\[r2\] = true<br />         = First\[r2\]           if Empty\[r2\] = false<br />Next\[r2\] = Next\[r\] |

And the Next set of this case is {$\empty$, {5}, $\empty$, {5,7}, {9,10}, $\empty$, {8}, {5,7}, $\empty$, $\empty$}

And let's combine these steps together. All the states we need include an entry point, which is the root, and all the leafs except $\epsilon$. The automaton consists of:

> Last\[root\] conatains all the leafs that has an empty Next.

- States: {root} $\cup$ {leafs}/{$\epsilon$}
- Initial State: {root}
- Final States: Last\[root\]           if empty\[root\] = false
                {root} $\cup$ Last\[root\]  otherwise
- Transition: For leaf nodes in First\[root\], reserve the transition between them. For other leaf nodes, reserve the transition between them and their neighbors obtained in Next.

In this case, the transitions are (1, b, 5), (1, a, 7), (5, a, 9), (5, b, 10), (7, b, 8), (8, b, 5), (8, a, 7). The final states is {9, 10}.

{{< rawhtml >}}
<center>
<img src="/lexical_analysis/lexical_analysis_5.png" style="zoom: 50%;" />
</center>
{{< /rawhtml >}}

And finally, we will use this methods to convert `l(mao|ol)` and show the difference.

{{< rawhtml >}}
<center>
<img src="/lexical_analysis/lexical_analysis_6.png" style="zoom:50%;" />
</center>
{{< /rawhtml >}}

There are no more unnecessary states here, that is a significant progress.

## Brzozowski Derivatives

So, what on earth is **Brozozowski Derivative** and how does this concept connect to the algorithm mentioned above?

Brozozowski Derivation is defined as $u^{-1}S$ of a set $S$ of strings and string $u$, which is the set of all strings obtainable from a string in $S$ by simply cutting off the prefix $u$. Formally speaking: 

$u^{-1}S:=\\\{v\in \sum^\*| uv\in S\\\}$. $\sum$ is the alphabet and $\sum^\*$ is its kleene closure.

A language $L$ is called nullable if it contains empty string $\epsilon \in L$. Each language $S$ is uniquely determined by nullability of its derivatives $w \in S$ iff $\epsilon \in w^{-1}S$.

A language can be viewed as a boolean-labelled tree and for each possible string $w\in \sum^\*$, when $w \in S$ then the label is true, otherwise, it's false. From this perspective, the derivative with respect to a symbol $a$ corresponds to computing the remaining subtree obtained by following the edge of $a$ pointing to its successors. By doing so, we decompose the tree into the root and $a^{-1}S$, the following equality. Formally, we get an equation: $S=(\{\epsilon\}\cap S)\cup \bigcup_{a\in\sum} a (a^{-1}S)$.

And remember how we define the algorithm above? We first want to know whether empty string is valid for the given tree. then we look at ($\cdot$), and say it divide the tree into subtrees. (|) is nothing but union. First\[\] denotes the possible $a$s and Next\[\] is the reference to remaining $a^{-1}S$.

**The Berry-Sethi Algorithm builds a bridge from Brzozowski derivative's view of regular languge to the Glushkov Automaton.**

