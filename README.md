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
1. Primitive  (call by value)
     - Number       -->
     - Bigint      --> ```const num = 123456789n```
     - Boolean     --> true/false
     - String      --> ""
     - Null        --> standalone value
     - Undefined
     - Symbol      --> unique
