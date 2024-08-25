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


 ## DATATYPE  &nbsp;  &nbsp; (<small><small><small>_kis trha se memory mein rkha jata hain or access kara jata hain usi traha se data type ko 2 category mein divide kara hain_<small/><small/><small/>)

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
     console.log(`hello my name is ${name} and my repocount is ${repoCount}  // Template Literals:

     const gamename = new String("pubg")
     console.log(gamename[0]); // p
     console.log(gamename.__proto__);  node {} | browser String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}

     1. String Key Concepts

        let str = "Hello World";

      - String Properties:

         console.log(str.length);  // Output: 11

      - Common String Methods:

         console.log(str.charAt(1));         // Output: 'e'
         console.log(str.indexOf('l'));      // Output: 2
         console.log(str.slice(1, 4));       // Output: 'ell'
         console.log(str.substring(1, 4));   // Output: 'ell'
         console.log(str.toUpperCase());     // Output: 'HELLO WORLD'
         console.log(str.replace('H', 'J')); // Output: 'Jello World'
         console.log(sentence.split(' '));   // Output: ['Hello', 'World']
         console.log(str.trim());            // Output: 'HelloWorld'

       - String are Immutable:

           str[0] = "J";      // Does nothing
           console.log(str);  // Output: 'Hello World'
```
## NUMBERS
```javascript
    
    const score = 400
    console.log(score) //400   **typeof number

    const balance = new Number(100)
    console.log(balance)   // node [Number: 400]  // browser Number {400} [[Prototype]]: Number [[PrimitiveValue]]: 400


    - Numbers Methods:

      console.log(balance.toString().length);       // 3
      console.log(balance.toFixed(2));              // 100.00
      console.log(balance.toPrecision(4));          // "100.0"
      console.log(balance.toLocaleString("en-IN")); // 10,000
      console.log(balance.toExponential(1));        // "1.0e+2"

    - Checking if values are finite, integers, or NaN

      console.log(Number.isFinite(balance));    // true
      console.log(Number.isInteger(balance));   // true
      console.log(Number.isNaN(balance));       //false
```
## MATHS
```javascript
      console.log(Math);            // node Object [Math] {}  // browser Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}

      console.log(Math.abs(-4));    //  4
      console.log(Math.round(4.6))  //  5
      console.log(Math.ceil(4.2))   //  5
      console.log(Math.floor(4.9))  //  4
      console.log(Math.min(4,3,7))  //  3
      console.log(Math.max(7,9,2))  //  9

      console.log(Math.random())    //  return random number between 0 and 1
      console.log(Math.random()*10)
      console.log((Math.random()*10)+1)
      console.log(Math.floor(Math.ramdom()*10)+1))

      const min = 10
      const max = 20
      Math.floor(Math.random()*(max-min+1))+min
```
## DATES
```javascript

   let myDate = new Date()
   console.log(typeof myDate)            // object
   console.log(myDate);                  // 2024-08-25T06:20:03.401Z
   console.log(myDate.toString());       // Sun Aug 25 2024 11:51:40 GMT+0530 (India Standard Time)
   console.log(myDate.toDateString());   // Sun Aug 25 2024
   console.log(myDate.toLocaleString()); // 25/8/2024, 11:54:33 am

   let myCreatedDate = new Date(2023,0(month),24)
   console.log(myCreatedDate)            // 2023-01-23T18:30:00.000Z

   let myTimeStamp = Date.now()
   console.log(myTimeStamp)              // 1724567383704 (in millisecond from January 1, 1970, UTC)
   console.log(myCreatedDate.getTime())  // 1674498600000 (in millisecond from January 1, 1970, UTC)
 
   console.log(Math.floor(Date.now()/1000(second)))  // 1724567740 (time in second)

   let newDate = new Date()
   console.log(newDate);                  //  2024-08-25T06:37:56.966Z
   console.log(newDate.getMonth())        //  7

   newDate.toLocaleString('default',{weekday: "long"})

```

   





  




