#**JAVASCRIPT NOTES**

**VARIABLE**

i). let

ii) const           (*ERROR assignment to const variable(variable ko change nahi kar skte ek bar value assign karne ke bad)*)

iii) var
> [!WARNING]
> prefer not to use var because of issue in block scope and functional scope

>[!IMPORTANT]
>
>"use strict";    (*treat all js code as a new version*)
>
> alert(3+3)      (*ERROR, we are using nodejs,not browser*)


**DATATYPE**   (kis trha se memory mein rkha jata hain or access kara jata hain usi traha se data type ko 2 category mein divide kara hain)
EcmaScript [Read Docs](https://ecma-international.org/publications-and-standards/standards/ecma-262/).
1. Primitive  (call by value ( call karn pr copy milti hain))
     - Number       --> range (2<sup>53</sup>)
     - Bigint      --> ```const num = 123456789n```
     - Boolean     --> true/false
     - String      --> ""
     - Null        --> standalone value
     - Undefined
     - Symbol      --> unique

1. Non Primitive (Reference)  (call by value ( call karn pr copy milti hain))
     - Object
     - Array
     - Function
  




