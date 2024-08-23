let body = document.querySelector("body")
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")



function randomColor(){
    const hexvalues = "0123456789ABCDEF"
    let color = "#"

    for(let i=0; i<6; i++){
        color += hexvalues[Math.floor(Math.random()*16)]
    }
    return color

    
}
let setIntervalId;
let setIntervalFun = ()=>{
    if(!setIntervalId){
    setIntervalId = setInterval(()=>{
        body.style.backgroundColor = randomColor()
    },1000)
    }

} 
start.addEventListener("click",setIntervalFun)

let clearIntervalFun = ()=>{
    clearInterval(setIntervalId)
    setIntervalId = null;
}
stop.addEventListener("click",clearIntervalFun)




