let form = document.querySelector("form")


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const weight = parseInt(document.querySelector("#weight").value)
    const height = parseInt(document.querySelector("#height").value)
    const res =  document.querySelector("#result")


    if(weight === '' || weight < 0 || isNaN(weight)){
        res.textContent = "Please enter a valid weight"
    }else if (height=== '' || height<0 || isNaN(height)){
        res.textContent = "Please enter a valid height"
    }
    else{
    const result = (weight/((height*height)/10000)).toFixed(2)
    res.innerText = `RESULT : Your BMI is ${result}`
    }


   // color functionality

    const result = (weight/((height*height)/10000)).toFixed(2)
    const less = document.querySelector("#less")
    const severelyunderweight = document.querySelector("#severelyunderweight")
    const underweight = document.querySelector("#underweight")
    const normalBmi = document.querySelector("#normal")
    const overweight = document.querySelector("#overweight")
    const moderatelyobese = document.querySelector("#moderatelyobese")
    const severelyobese = document.querySelector("#severelyobese")
    const veryserverlyobese = document.querySelector("#veryserverlyobese")
   
    if(result < 15){
        less.style.backgroundColor = "orange"
    }else if (result > 15 && result < 16){
        severelyunderweight.style.backgroundColor = "orange"
    }else if (result >16 && result < 18.5){
        underweight.style.backgroundColor = "orange"
    }else if(result > 18.5 && result < 25){
        normalBmi.style.backgroundColor = "green"
    }else if (result > 25 && result < 30){
        overweight.style.backgroundColor = "red"
    }else if (result >30 && result < 35){
        moderatelyobese.style.backgroundColor = "red"
    }else if(result > 35 && result < 40){
        severelyobese.style.backgroundColor = "red"
    }else if (result > 40) {
        veryserverlyobese.style.backgroundColor = "red"
    }

})