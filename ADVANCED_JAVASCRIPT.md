# JAVASCRIPT_ADVANCED_CONCEPT
## JAVASCRIPT_ASYNC_CODE
![Alt text](https://res.cloudinary.com/dnknslaku/image/upload/c_fill,h_700,w_520/v1725673640/Untitled_design_xfhq1e.png)

> setTimeOut function and clear TimeOut function
```HTML
        <button id="stop">STOP</button>
```
```javascript
        let setTimeOutId = setTimeout(()=>{
            console.log("siddharth kumar rai")
        },2000);
        document.getElementById("stop").addEventListener("click",function(){
            clearTimeout(setTimeOutId)
        })
```
> setInterval function and clearInterval function
```HTML
        <button id="start">START</button>
        <button id="stop">STOP</button>
```
```javascript
        let resetInterval;
        const sayName = function(str){
            console.log(str,Date.now())
        }
        document.querySelector("#start").addEventListener("click",(str)=>{
        resetInterval = setInterval(sayName,1000,"hii")
        })
        document.querySelector("#stop").addEventListener("click",function(){
            clearInterval(resetInterval)
        })
```
#### ONCLICKBGCHANGER (refer to BGCOLORCHANGER in root directory)
## api request (XMLHTTP request)
```javascript
        let githubApi = "https://api.github.com/users/siddharthkumarrai"
        // 0	UNSENT	Client has been created. open() not called yet.
        let xhr = new XMLHttpRequest()
        // 1	OPENED	open() has been called.
        xhr.open("GET", githubApi, true)
        console.log("OPENED CALLED", xhr.readyState)
        // 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
        xhr.send()
        console.log("SEND CALLED", xhr.HEADERS_RECEIVED)
        // 3	LOADING	Downloading; responseText holds partial data.
        xhr.onprogress = () => {
            console.log("LOADING", xhr.readyState)
        }
        // 4	DONE	The operation is complete.
        xhr.onload = ()=>{
            console.log("DONE",xhr.readyState)
        }
        //arrow function ke andar this.responseText nahi use kar sakte response json me parse nahi hota
        xhr.onreadystatechange = ()=>{
            if (xhr.readyState === 4) {
                let res = xhr.response   // string response
                let objdata = JSON.parse(res)
                console.log(typeof objdata)
                console.log(objdata);
                let name = document.querySelector("h1");
                let image = document.querySelector("img");
                name.innerText = objdata.login;
                image.src = objdata.avatar_url  
            }
        }

        // classical function mein this.response likh sate hain
        // xhr.onreadystatechange = function () {
             if(xhr.readyState === 4){
                 let data = this.responseText
                 console.log(data)
             }      
            }
```
## promises
> Method 1
- How to create promise
  ```javascript
  let promiseOne = new Promise(function(resolve,reject){
        //async task
        setTimeout(function(){
            console.log("siddharth kumar rai")
            resolve()
        },1000)
  })
  ```
- How to consume promise
```javscript
    promiseOne.then(function(){
        console.log("promise was consumed")
    })
```
> Method 2
```javscript
    new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Db connected 2")
            resolve()
        },1000)
    }).then(function(){
        console.log("promise two consumed")
    })
```
> Method 3
```javascript
    et promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("new DB CONNECTED 3");
        resolve({username:"siddharth", id: 123})
        
    },1000)
})

promiseThree.then(function(data){
    console.log(data)
})
```
> Method 4
```javascript
    let promiseFour = new Promise(function(resolve,reject){
        setTimeout(function(){
            let error = true
            if(!error){
                console.log("DB connected 4" )
                resolve({languageName: "javaScript", id: "js"})
            }else {
                reject("error 404")
            }
        },1000)
    })

    promiseFour.then(function(data){
        console.log("promise four consumed")
        return data.languageName
    }).then(function(username){
        console.log(username)
    })
    .catch(function(error){
        console.log(error,"something went wrong")
    })
    .finally(function(){
    console.log("if promise was resolved then executed otherwise nor resolved then also executed")
    })
```
> Method 5 ( using async await )
```javascript
let promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            console.log("DB connected 5")
            resolve({languageName: "python",id:"py"})
        }else{
            reject("error 502")
        }
    },1000)
})

async function consumedPromiseFive(){
    try {
    const response = await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumedPromiseFive()

```
## api data handle (api fetch method)
```javascript
        async function getAllUser(){
            try {
              const response = await fetch("https://jsonplaceholder.typicode.com/users")
              const data = await response.json()

              console.log(data)
            } catch (error) {
                console.log(error)
            }
        }

        getAllUser()

        fetch("https://api.github.com/users/siddharthkumarrai")
        .then(function(data){
            let res = data.json()
            return res
        })
        .then(function(result){
            console.log(result)
        }).catch(function(error){
            console.log(error)
        })

// promise.all
// yes this is also available, kuch reading aap b kro.
```
# Classes and OOP
## javascript and classes
### OOP ( programming paradigm ( code likh ne ka structure kya style producer ) )
> Object
- collection of property and methods e.g toUpperCase
> why we use OOP
- code bada messup ho raha tha (concept of spagti code( code reuse nahi ho pa rha tha ))
> parts of OOP
- Object literall
- OOP keywords
  - Constructor function
  - Prototypes
  - Classes
  - Instances (new, this)
> 4 pillars
- Abstraction ( Details hide karlena e.g fetch )
- Encapsulation ( ek wrapper lagana jo jo aap ko access karne deya jaye wo aap access kar paa rahe hain jo nahi karne de raha access nahi kar pa rahe hain)
- Inheritance
- Polymorphism ( ek hi mthod bhut sare kam kar deta hain )

## OOP
> Object literal ( basic unit )
```javascript
   const user = {
        username: "siddharth",
        loginCount: 7,
        signedIn: true,

        getUserDetails: function(){
                console.log(`Username: ${this.username}`)
                console.log(this)        
        }
   }
   console.log(user.name)
   console.log(user.getUserDetails())
   console.log(this)                // {}
```
## constructor
- constructor function ( new keyword ) (in single instance create multiple object )
```javascript
   const promiseOne = new Promise()
   const date new Date()

   function user( username, loginCount, isLoggedIn ){
        this.username = username;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn;

        return this
   }

   const userOne = new user("siddharth", 7, true)
   const userTwo = new user("abhishek", 17, false)
   console.log(userOne)
   console.log(userOne.constructor) (refrence hota hain khud ke bare mein)
```
- how new keyword work
  - step 1: new object create
  - step 2: constructor function call hota hain new keyword ke karn ye sare argument ko pack kar ke de deta hain
  - step 3: all argument inject in this keyword
  - step 4: function ke ander mil jate hain
## new keyword 
- default behavior of Javascript is prototypal behavior
- Object
```mermaid
graph LR;
    Array --> Object;
    String --> Object;
    Function --> Object;
    Object --> null;
```
  ```javascript
     function multiplyBy7(num){
          return num*7
     }
  
     multiplyBy7.power = 2

     console.log(multiplyBy7(8))          // 56
     console.log(multiplyBy7.power)       // 2
     console.log(multiplyBy5.prototype)   // {} prototype us method ka this hain

     function user(username, score) {
        this.username = username
        this.score = score
     }

     user.prototype.increment = function(){
                this.score++
     }

     user.prototype.printScore = function(){
                console.log(`the score is ${this.score}`)
     }

     const userOne = new user("sidd",77)
     const userTwo = new user("abhi",90)

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
```
## Prototypes
```javascript
// let myName = "sidd     "
// let mychannel = "fanstatic4     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sidd = function(){
    console.log(`sidd is present in all objects`);
}

Array.prototype.heysidd = function(){
    console.log(`sidd says hello`);
}

// heroPower.sidd()
// myHeros.sidd()
// myHeros.heysidd()
// heroPower.heysidd()
```

> inheritance
```javascript
const User = {
    name: "sidd",
    email: "sidd@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User
```

> modern syntax
```javascript
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "siddharth     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"siddharth".trueLength()
"iceTea".trueLength()
```
  

   


   




