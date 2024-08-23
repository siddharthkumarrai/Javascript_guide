const time = document.querySelector(".time")

setInterval(()=>{
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString()
},1000)