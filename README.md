#**JAVASCRIPT NOTES**

**VARIABLE**

i). let

ii) const &nbsp; &nbsp; &nbsp; (*ERROR assignment to const variable(variable ko change nahi kar skte ek bar value assign karne ke bad)*)

iii) var
> [!WARNING]
> prefer not to use var because of issue in block scope and functional scope

>[!IMPORTANT]
>"use strict"; &nbsp; &nbsp;    (*treat all js code as a new version*)
>
> alert(3+3)   &nbsp; &nbsp;  &nbsp;    (*ERROR, we are using nodejs,not browser*)


**DATATYPE** &nbsp;  &nbsp; (kis trha se memory mein rkha jata hain or access kara jata hain usi traha se data type ko 2 category mein divide kara hain)

EcmaScript [Read Docs](https://ecma-international.org/publications-and-standards/standards/ecma-262/).

1. Primitive  (call by value ( call karn pr copy milti hain))
     - Number       --> range (2<sup>53</sup>)
     - Bigint      --> ```const num = 123456789n```
     - Boolean     --> true/false
     - String      --> ""
     - Null        --> standalone value   &nbsp; &nbsp; &nbsp; **typeof -->object
     - Undefined      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **typeof --> undefined
     - Symbol      --> unique

1. Non Primitive (Reference)  (call by value ( call karn pr copy milti hain))
     - Object      &nbsp; &nbsp; &nbsp; **typeof --> object
     - Array       &nbsp; &nbsp; &nbsp; &nbsp; **typeof --> object
     - Function    &nbsp; &nbsp; **typeof --> function

**CONVERSION**
```
     let score =                         "77" // "77abc" // null // undefined
     let valueINNumber = Number(score)
     console.log(valueINNumber)           77  //   NaN   //  0   // NaN
```


  




