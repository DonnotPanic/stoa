+++
date = "2021-03-26"
title = "Subtyping：从 Lens 到 Row Polymorphism"
katex = true
series = ["OCaml","Haskell", "Row Poly", "programming"]
+++

最近水群时看到群友在 Rust 里写 Lens ，突然想整理一篇水文谈谈相关的话题，虽然是从 Lens 到 Row Polymorphism ，本文并不会涉及 Lens 的技术细节，如果对 Lens 这一技术感兴趣，推荐 [Lens简介](https://zhuanlan.zhihu.com/p/337455794)或者 [Lens更长一点的简介](http://oleg.fi/gists/posts/2017-04-18-glassery.html) 。

##  Subtyping and Structural typing

时常有人说，面向对象优点非常多，封装、继承、多态，然而稍有常识的人一眼便能看出其中的端倪，多态当真是面向对象的特点吗？想想泛型好像也是一种多态哦？还是说，这里的多态其实是限定了继承关系的基类与派生类的类型上的联系？恭喜你，到这一步，你就离 **子类型（Subtype）** 的概念不远了。形式化地说，子类型是指一种类型多态的形式，即子类型可以替换为超类型执行超类型的操作。或者说，在超类型的环境下可以安全的使用子类型，即 liskov 替换原则。

小孩子都知道，世上有两种 typing system，一种叫 Nominal Typing，另一种叫 Structural Typing。Nominal Typing 是指除非你手动标注 A 类型是 B 类型的子类型，否则不承认。而 Structural Typing 则只要 B 类型的所有字段都在 A 类型出现即可。 ~~~（不知怎的突然感觉有种唯名论与实在论在争论的感觉hhh）~~~ Structural Typing 典型的例子是 OCaml：

```OCaml
# class t = 
  object (self)
    val mutable a = 0
    method get_a = a
    method set_a b = a <- b
  end;; 
(* 这是 class t 的类型签名 *)
class t :
  object
    val mutable a : int
    method get_a : int
    method set_a : int -> unit
  end
(* x 为 t 的instance *)
# let x = new t;;
val x : t = <obj>
(* 这种技巧被称为立即对象，学过 Java 的人应该会觉得有点类似匿名类 *)
# let y =
    object (self)
      method get_a = 2
      method set_a b = Printf.printf "%d\n" b
      method hello = Printf.printf "hello\n"
    end;;
val y : < get_x : int; hello : unit; set_x : int -> unit > = <obj>
(* coerce y into type t *)
# x = (y :> t);;
- : bool = false
(* 只有相同类型可以比较 *)
```

注意到，虽然我们没有说明 y 的类型 `<get_x : int; hello : unit; set_x : int -> unit>` 和 class t 的关系，但是 OCaml 认为，y 的类型是 t （也即 x 的类型）的子类型，OCaml可以通过 `:>` 显式的将子类型 cast 到超类型。


> 实际上在 OCaml 中，y 的 type 是 object type，也即常规的 data type，与 t 对应的 class type 并不一样。我们定义 t 的同时会创建对应的 object type，这也是为什么 coercion 最终还是成功的，我们比较的是对应的 object type。

有趣的一点是，这种 Structural Typing 常常被和 Duck Typing 相提并论，实际上两者的差异主要体现在 Duck Typing 是在 runtime 确定的，而 Structural Typing 则是 static typing system。

## Polymorphism in Haskell

众所周知，Haskell 是很菜的语言，比如 Haskell 没有依赖类型，也没有 Subtyping，但是在 HKT（Higher Kinded Types）上，Haskell 的表现一直不错，大家都知道的 System F，但是 Haskell 还是有点菜，不过也是挺好的，可惜对我来说比较菜，只是太好了，没体现出菜的感觉，所以相对好来说，有点菜，总体来说还是好，好中不足就是菜了点。

总之，如果你想要在 Haskell 进行 polymorphism，必须想点办法才行。我虚心请教了神奇海螺，它说我的解决方案就是用 type class 实现 ad hoc polymorphism。什么意思呢，具体地说，就是我有一个 constraint，和一些见 type 使舵的 operator/function，constraint 约束了我有哪些 operator/function，但对应的具体的 operation 是基于具体的 type 而定的。某种意义上说就是重载。这么做的好处是我实际上我用 constraint 去替代了 abstract class。如果 abstract class 之间本身存在继承的耦合，那么只需要简单的把对应父级的 constraint 作为子级的前提，实际上达成了类似 Subtype Polymorphism 的目的。

举例来说

```OCaml
# class virtual abstract_point x_init = 
   object (self)
     method virtual get_x : int
     method get_offset = float_of_int (self#get_x - x_init)
     method virtual move_x : int -> unit
   end;;
(* 省略类型签名 *)
# class virtual abstract_point2 x_init y_init =
   object (self)
     inherit abstract_point x_init as super
     method virtual get_y : int
     (* 多继承会保留最后的定义 *)
     method get_offset = sqrt (super#get_offset ** 2. +. float_of_int (self#get_y - y_init) ** 2.)
     method virtual move_y : int -> unit
     method virtual move : int * int -> unit
   end;;
```
如果用 type class 的方式去定义：

```Haskell
class Pointable a where
    get_x :: a -> Int
-- 因为众所周知的原因，在 Haskell 里没有默认参数，虽然也可以搞出来，但是太烦了
    get_offset :: a -> Float
    move :: Int -> a -> a
class Pointable a => Pointable2 a where
    get_y :: a -> Int
    move2 :: (Int, Int) -> a -> a
```

虽然马马虎虎，但是我们在 Haskell 里也能用类似继承的方式编程了，好耶。只不过，还有 one more thing。ad hoc polymorphism 解决的是函数间的多态，然而对于一个继承关系来说，不仅有方法，还有成员。Haskell 的 immutable 着实头疼，固然我们可以将成员的访问和修改看作一组 getter 和 setter 的封装，实际上返回一个新的 object。但对于一个多层的数据模型进行 get 和 set，对于一个支持 subtyping 的语言，这并不困难，倘若你要访问基类的属性时直接访问派生出的子类即可。但是对于一个没有 subtyping 的语言，这往往涉及一个 nested data 的访问。

不妨举个最简单的例子：

```OCaml
# class container = 
   object (self)
     val mutable elem = ""
     method get_element = elem
     method set_element new_elem = elem <- new_elem
   end;;
(* 省略类型签名，下同 *)
# class tagged_item = 
   object (self)
     inherit container as super
     val mutable tag = ""
     method get_tag = tag
     method set_tag new_tag = tag <- new_tag
   end;;
# class item_with_desc = 
   object (self)
     inherit tagged_item as super
     val mutable desc = ""
     method get_description = desc
     method set_description new_desc = desc <- new_desc
   end;;
```

现在我们可以通过 `let t = new item_with_desc` 获取 object t，如果要修改 elem， 只需要 `t#set_element "new_elem"`。如果用 type class 的方式呢？（当然我们不考虑设计模式的问题，只是直白的翻译过去

```Haskell
data Container = Container { element :: String } deriving (Show)
class Containable a where
    getElem :: a -> String
    setElem :: String -> a -> a
-- 之后省略 instancing，反正都是重复的
instance Containable Container where
    getElem c = element c
    setElem e c = Container { element = e }

data TaggedItem = TaggedItem { 
                    container :: Container,
                    tag :: String 
                  } deriving (Show)
class Taggable a where
    getTag :: a -> String
    setTag :: String -> a -> a
instance Taggable TaggedItem where ...

data ItemWithDesc = ItemWithDesc { 
                      taggedItem :: TaggedItem,
                      description :: String 
                    } deriving (Show)
class Describable a where
    getDesc :: a -> String
    setDesc :: String -> a -> a
instance Describable ItemWithDesc where ...
```

看起来不错，我们可以用 `ItemWithDesc { taggedItem=TaggedItem{ Container{ element="" }, tag="" } , description="" }` 来新建一个 object t，虽然我们可以用函数去进行包装让它不用暴露在外。可如果我们想要修改一个 element 呢。。。emmm，`setElem "new_elem" \$ container \$ taggedItem t`，实在啰里八嗦的非常恶心，再加上我们单独用 type class 写一组 getter 和 setter 一定程度上限制了它的泛用性，还会造成其与数据的耦合。总之，为了应对这样的 nested data，便有了 `Lens` 这一库。

## Lens 它来了

是的，Lens 它来了，由于本文并不是针对 Lens 的科普文，所以会飞快的速度介绍完 Lens 的核心思想，然后大家各回各家，皆大欢喜。那么 Lens 到底是什么呢？

{{< rawhtml >}}
<center><img src="http://oleg.fi/gists/images/optics-hierarchy.svg" alt="Lens结构" />
{{< /rawhtml >}}

直白的说 Lens 不过是对上述 getter、 setter 的花哨包装罢了。Lens 的核心组件包括Fold、Setter、Getter、Traversal、Lens、Review、Prism。看起来很复杂，不过实际使用却非常直观简洁。

对于上述 data 来说，如果