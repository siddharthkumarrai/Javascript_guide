# JAVASCRIPT NOTES

## VARIABLE

i). let

ii) const &nbsp; &nbsp; &nbsp; (*ERROR assignment to const variable(variable ko change nahi kar skte ek bar value assign karne ke bad)*)

iii) var
> [!WARNING]
> prefer not to use var because of issue in block scope and functional scope

>[!IMPORTANT]
>"use strict"; &nbsp; &nbsp;    (*treat all js code as a new version*)
>
> alert(3+3)   &nbsp; &nbsp;  &nbsp;    (*ERROR, we are using nodejs,not browser*)


 ## DATATYPE  &nbsp;  &nbsp; (**_kis trha se memory mein rkha jata hain or access kara jata hain usi traha se data type ko 2 category mein divide kara hain_**)

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


## CONVERSION
```javascript
     let score =                         "77" || "77abc" || null || undefined
     let valueINNumber = Number(score)   ----    --------   ----    ---------
     console.log(valueINNumber)           77  ||   NaN   ||  0   ||   NaN

     let isLoggedIn =                               1    ||   0   || "sidd" || ""                        
     let booleanIsLoggedIn = Boolean(isLoggedIn)    ---     -----    ------    ---
     console.log(booleanIsLoggedIn)                 true || false ||  true  || false  
```

## OPERATIONS

+, -, /, *, **, %

```javascript
console.log(+true);     // 1
console.log(true+);     // error
console.log(+"");       // 0
```

## COMPARISON

 <, >, <=, >=, ==, !=
```javascript
console.log("2">1);          //true
console.log("02">1);         //true
console.log(null>0);         //false
console.log(null==0);        //false
console.log(null>=0);        //true
console.log(undefined>0);    //false
console.log(undefined==0);   //false
console.log(undefined>=0);   //false
```
=== strict check

## STACK AND HEAP MEMORY ALLOCATION IN JAVASCRIPT

The following code demonstrates how variables and objects are stored in the stack and heap memory in JavaScript.

```javascript
let myName = "siddharth";
let anotherName = "sidd";
anotherName = "skr";

console.log(myName);     // Output: siddharth
console.log(anotherName); // Output: skr

let userOne = { email: "sidd@gmail.com", username: "sidd" };
let userTwo = userOne;

userTwo.email = "siddharthkumarrai777@gmail.com";

console.log(userOne.email); // Output: siddharthkumarrai777@gmail.com
console.log(userTwo.email); // Output: siddharthkumarrai777@gmail.com

Stack and Heap Memory Diagram

Stack Memory:
Primitive(copy) values (like strings and numbers) and references to objects are stored in the stack memory.

Stack Memory:

| Variable      | Value                                      |                              
| ------------- | -------------------------------------------|
| myName        | "siddharth" (string)                       |
| anotherName   | "skr" (string)                             |
| userOne       | points to the object in the heap.          |
| userTwo       | points to the same object in the heap.     |

Heap Memory:
Non Primitive (References) Objects and complex data structures are stored in the heap memory.

Heap Memory:

| Address       | Object                                                        |
| ------------- | --------------------------------------------------------------|
| 0x001         | { email: "siddharthkumarrai777@gmail.com", username: "sidd" } |

Link Between Stack and Heap:

Stack Memory:
    | userOne  | ---> Reference to Heap (0x001) 
    | userTwo  | ---> Reference to Heap (0x001)

Heap Memory:
    0x001  --->  { email: "siddharthkumarrai777@gmail.com", username: "sidd" }
```

## STRING
```javascript
     const name = "siddharth"
     const repoCount = 50
     console.log(`hello my name is ${name} and my repocount is ${repoCount}

     const gamename = new String("pubg")
     console.log(gamename[0]); // p
     console.log(gamename.__proto__);  node {} | browser String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}

```







  




