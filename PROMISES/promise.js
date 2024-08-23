let promiseOne = new Promise(function(resolve,reject){
    //async task
    setTimeout(function(){
        console.log("siddharth kumar rai")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise was consumed")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Db connected 2")
        resolve()
    },1000)
}).then(function(){
    console.log("promise two consumed")
})

let promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("new DB CONNECTED 3");
        resolve({username:"siddharth", id: 123})
        
    },1000)
})

promiseThree.then(function(data){
    console.log(data)
})

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
}).finally(function(){
    console.log("if promise was resolved then executed otherwise nor resolved then also executed")
})

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

 // api real data handel

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
