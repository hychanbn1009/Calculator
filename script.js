// getting the button and ready the event listner
const one=document.getElementById('one').addEventListener('click',()=>{input(1)},false)
const two=document.getElementById('two').addEventListener('click',()=>{input(2)},false)
const three=document.getElementById('three').addEventListener('click',()=>{input(3)},false)
const four=document.getElementById('four').addEventListener('click',()=>{input(4)},false)
const five=document.getElementById('five').addEventListener('click',()=>{input(5)},false)
const six=document.getElementById('six').addEventListener('click',()=>{input(6)},false)
const seven=document.getElementById('seven').addEventListener('click',()=>{input(7)},false)
const eight=document.getElementById('eight').addEventListener('click',()=>{input(8)},false)
const nine=document.getElementById('nine').addEventListener('click',()=>{input(9)},false)
const zero=document.getElementById('zero').addEventListener('click',()=>{input(0)},false)
const addButton=document.getElementById('addButton').addEventListener('click',()=>{updateOperator('+')},false)
const subtractButton=document.getElementById('subtractButton').addEventListener('click',()=>{updateOperator('-')},false)
const multiplyButton=document.getElementById('multiplyButton').addEventListener('click',()=>{updateOperator('*')},false)
const divideButton=document.getElementById('divideButton').addEventListener('click',()=>{updateOperator('/')},false)
const equalButton=document.getElementById('equalButton').addEventListener('click',()=>{operate()},false)
const clear=document.getElementById('clearButton').addEventListener('click',()=>{input('c')},false)
const firstNumber = document.getElementById('firstNumber')
const secondNumber = document.getElementById('secondNumber')
const operatorContainer = document.getElementById('operatorContainer')
const result = document.getElementById('result')
const decimalPointButton = document.getElementById('decimalPointButton').addEventListener('click',()=>{input('.')},false)

// store the number variable as list and check if the number1 finished or not
let storeNumber1=[]
let storeNumber2=[]
let finishedNumber1=false
let isdecimalpoint=false

//basic calculate function
const add =(number1,number2)=>{
    return number1+number2
}
const subtract=(number1,number2)=>{
    return number1-number2
}
const multiply=(number1,number2)=>{
    return number1*number2
}
const divide=(number1,number2)=>{
    if(number2!==0){
        return number1/number2
    }
    else{
        return 'Cannot divide by0'
    }
}

//if the equal button pressed,the function will check the operator and return array into number and do calculation method
const operate=()=>{
    if(method==='+'){
        num1=parseFloat(resultInt(storeNumber1))
        num2=parseFloat(resultInt(storeNumber2))
        result.innerHTML=(add(num1,num2))
    }
    if(method==='-'){
        num1=parseFloat(resultInt(storeNumber1))
        num2=parseFloat(resultInt(storeNumber2))
        result.innerHTML=(subtract(num1,num2))
    }
    if(method==='*'){
        num1=parseFloat(resultInt(storeNumber1))
        num2=parseFloat(resultInt(storeNumber2))
        result.innerHTML=(multiply(num1,num2))
    }
    if(method==='/'){
        num1=parseFloat(resultInt(storeNumber1))
        num2=parseFloat(resultInt(storeNumber2))
        result.innerHTML=(divide(num1,num2))
    }
}

// if the operator button pressed, this function will update the operator
const updateOperator=(operator)=>{
    if (operator==='+'||operator==='-'||operator==='*'||operator==='/'){
        console.log(operator)
        finishedNumber1=true
        isdecimalpoint=false;
        operatorContainer.innerHTML=(operator)
        return method=operator
    }
    else{
        return ''
    }
}

//if the number and clear pressed, the number will be stored and clear
const input=(inputNumber)=>{
    if(inputNumber==='c'){
        storeNumber1=[]
        storeNumber2=[]
        finishedNumber1=false
        isdecimalpoint=false;
        firstNumber.innerHTML=resultInt(storeNumber1)
        secondNumber.innerHTML=resultInt(storeNumber2)
        operatorContainer.innerHTML=('')
        result.innerHTML=('')
    }
//if user input clear, then clear all the data & variable
    if(inputNumber==='.'){
        if(isdecimalpoint===false){
            if(finishedNumber1===false){
                    storeNumber1.push(inputNumber)
                    console.log(storeNumber1)
                    firstNumber.innerHTML=resultInt(storeNumber1)
                }
            else{
                storeNumber2.push(inputNumber)
                console.log(storeNumber2)
                secondNumber.innerHTML=resultInt(storeNumber2)
            }
        }
        isdecimalpoint=true
    }
/* if user input '.',will check they input the '.' before, if they did not input '.' before, push the '.' into array
and return the checking variable to true. if the checking variable is true, system will not take '.' into array */
    else{
        if(finishedNumber1===false){
                storeNumber1.push(inputNumber)
                console.log(storeNumber1)
                firstNumber.innerHTML=resultInt(storeNumber1)
            }
        else{
            storeNumber2.push(inputNumber)
            console.log(storeNumber2)
            secondNumber.innerHTML=resultInt(storeNumber2)
        }
    }
}
//if user input normal number, push it into array


const resultInt=(resultNumber)=>{
    return resultNumber.join('')
}
//function to join the number

