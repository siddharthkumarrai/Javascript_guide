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
## ARRAYS
```javascript
   const myArr = [0,1,23,true,"sidd",null,undefined]
   const myArr2 = new Array(0,1,2,3,4,5)
   console.log(myArr2)                    // [ 0, 1, 2, 3, 4, 5 ]

 - Adding/Removing Elements (Mutation method)

   myArr2.push(6)                         // [ 0, 1, 2, 3, 4, 5, 6]
   myArr2.pop()                           // [ 0, 1, 2, 3, 4, 5 ]
   myArr2.unshift(9)                      // [ 9, 0, 1, 2, 3, 4, 5 ]
   myArr2.shift()                         // [ 0, 1, 2, 3, 4, 5 ]

- Accessing Elements

  myArr2.indexOf(2));                     // Output: 2  (not found -1)
  myArr2.lastIndexOf(2));                 // Output: 2
  myArr2.includes(9)                      // output: false

- Manipulating Elements

   const myArr2 = new Array(0,1,2,3,4,5)
   console.log(myArr2)                    // [ 0, 1, 2, 3, 4, 5 ]

   myArr2.splice(1(start_index),2(how many remove),4(which element you want add))   // return [ 1, 2 ]             // original array [ 0, 4, 3, 4, 5 ]

   console.log([1, 2, 3].reverse());              // Output: [3, 2, 1]
   console.log([3, 2, 1].sort());                 // Output: [1, 2, 3]
   console.log([1, 2, 3].fill(4));                // Output: [4, 4, 4]
   console.log([1, 2, 3, 4, 5].copyWithin(0, 3)); // Output: [4, 5, 3, 4, 5]

   copyWithin(0, 3) ka matlab hai:
   - Target: 0 (ye woh index hai jahan par elements ko paste karna hai)
   - Start: 3 (ye woh index hai jahan se elements ko copy karna hai)
   - End (optional): Ye woh index hai jahan tak elements ko copy karna hai. Agar end nahi diya jaye, toh array ke last element tak copy hoga.

- String Conversion

  myArr2.join("-");                       // Output: "0-1-2-3-4-5"

- Iteration

  const myArr2 = new Array(0,1,2,3,4,5)
  console.log(myArr2)                                // [ 0, 1, 2, 3, 4, 5 ]

  myArr2.forEach((element) => console.log(element)); // Output: 0, 1, 2, 3, 4, 5
  myArr2.map((element) => element * 2))              // Output: 0, 2, 4, 6, 8, 10
  myArr2.filter((element) => element > 1));          // Output: [2, 3, 4, 5]
  myArr2.reduce((acc, element) => acc + element));   // Output: 15

- ADVANCED CONCEPT

  const marvel_heros = ["thor","ironman","spider"]
  const dc_heros = ["super","flash","batman"]

  marvel_heros.push(dc_heros)                           // return size 4
  console.log(marvel_heros)                             // [ 'thor', 'ironman', 'spider', [ 'super', 'flash', 'batman' ] ]
  console.log(dc_heros)                                 // [ 'super', 'flash', 'batman' ]

  const all_heros = marvel_heros.concat(dc_heros);      // return : [ 'thor', 'ironman', 'spider', 'super', 'flash', 'batman' ]
  const all_new_heros = [...marvel_heros, ...dc_heros]  // return : [ 'thor', 'ironman', 'spider', 'super', 'flash', 'batman' ]

  const anotherArr = [1,2,3,[4,5,6],7,[6,7[4,5]]]
  const real_anotherArr = anotherArr.flat(Infinity)     // return : [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

  console.log(Array.isArray("siddharth"))               // false
  console.log(Array.from("siddharth"))                  // ['s', 'i', 'd', 'd', 'h', 'a', 'r', 't', 'h']
  console.log(Array.from({name: "siddharth"}))          // []

  let one = 100
  let two = 200
  let three = 300
  console.log(Array.of(one,two,three))                   // [ 100, 200, 300 ]
```
## OBJECTS
```javascript
   - singleton  (constructor se humesa singleton banega)
        Object.create()
        const tinderUser = new Object()

   - object literals (literal se humesa singleton bnega)
         const tinderUser = {}
     
        const mySym = Symbol("key1")
        const jsUser = {
                name: "siddharth",
                age: 19,
                location: "delhi",
                email: "sidd@gmail.com",
                isLoggdIn: false,
                lastLoginDays: ["monday","saturday"],
                "full Name": "siddharth kumar rai",
                [mySym]: "mykey1"
        }

        console.log(jsUser.email)                       // sidd@gmail.com
        console.log(jsUser["email"])                    // sidd@gmail.com
        console.log(jsUser["full Name"])                // siddharth kumar rai
        console.log(jsUser[mySym])                      // mykey1
        console.log(Object.keys(jsUser))                // ['name', 'age', 'location', 'email', 'isLoggdIn', 'lastLoginDays', 'full Name']
        console.log(Object.values(jsUser))              // ['siddharth',19,'delhi','sidd@gmail.com',false,[ 'monday', 'saturday' ],'siddharth kumar rai']
        console.log(Object.entries(jsUser))             // [[ 'name', 'siddharth' ],[ 'age', 19 ],[ 'location', 'delhi' ],[ 'email', 'sidd@gmail.com' ],[ 'isLoggdIn', false ],
                                                            [ 'lastLoginDays', [ 'monday', 'saturday' ] ],[ 'full Name', 'siddharth kumar rai' ]]
        console.log(jsUser.hasOwnProperty("isLoggedIn") // true

        jsUser.greeting = function hello() {
            console.log(`hello ${this.name}`);
        }
        jsUser.greeting()                                // hello siddharth

        Object.freeze(jsUser)                            // object ki property and method ko change nahi karne dega

       const obj1 = {1:"a", 2:"b"}
       const obj2 = {3:"a", 4:"b"}
       const obj3 = {obj1,obj2}
       console.log(obj3)                                  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

       const obj3 = Object.assign({},obj1,obj2)           // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }  (**agar {} ye nahi dete to sri value obj1 mein ja rahi hain)
       const obj3 = {...obj1, ...obj2}                    // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

```



      
  
  
