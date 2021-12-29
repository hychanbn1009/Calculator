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
const multiplyButton=document.getElementById('multiplyButton').addEventListener('click',()=>{updateOperator('×')},false)
const divideButton=document.getElementById('divideButton').addEventListener('click',()=>{updateOperator('÷')},false)
const equalButton=document.getElementById('equalButton').addEventListener('click',()=>{input('=')},false)
const clear=document.getElementById('clearButton').addEventListener('click',()=>{input('c')},false)
const firstNumber = document.getElementById('firstNumber')
const secondNumber = document.getElementById('secondNumber')
const operatorContainer = document.getElementById('operatorContainer')
const result = document.getElementById('result')
const decimalPointButton = document.getElementById('decimalPointButton').addEventListener('click',()=>{input('.')},false)
const deleteButton=document.getElementById('delete').addEventListener('click',()=>{input('del')},false)

// store the number variable as list and check if the number1 finished or not
let storeNumber1=[]
let storeNumber2=[]
let finishedNumber1=false
let isdecimalpoint=false

//add window onkeypress event listener method
window.onkeydown = function(event) {
    switch(event.key){
        case '1':
            input('1')
            break
        case '2':
            input('2')
            break
        case '3':
            input('3')
            break
        case '4':
            input('4')
            break
        case '5':
            input('5')
            break
        case '6':
            input('6')
            break
        case '7':
            input('7')
            break
        case '8':
            input('8')
            break
        case '9':
            input('9')
            break
        case '0':
            input('0')
            break
        case '+':
            updateOperator('+')
            break
        case '-':
            updateOperator('-')
            break
        case '*':
            updateOperator('×')
            break
        case '/':
            updateOperator('÷')
            break
        case 'Enter':
            input('=')
            break
        case 'Delete':
            input('del')
            break
        case 'Backspace':
            input('del')
            break
    }
};

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
        result.innerHTML=(Math.round(add(num1,num2)*100000)/100000)
    }
    if(method==='-'){
        num1=parseFloat(resultInt(storeNumber1))
        num2=parseFloat(resultInt(storeNumber2))
        result.innerHTML=(Math.round(subtract(num1,num2)*100000)/100000)
    }
    if(method==='×'){
        num1=parseFloat(resultInt(storeNumber1))
        num2=parseFloat(resultInt(storeNumber2))
        result.innerHTML=(Math.round(multiply(num1,num2)*100000)/100000)
    }
    if(method==='÷'){
        num1=parseFloat(resultInt(storeNumber1))
        num2=parseFloat(resultInt(storeNumber2))
        result.innerHTML=(Math.round(divide(num1,num2)*100000)/100000)
    }
}

// if the operator button pressed, this function will update the operator
const updateOperator=(operator)=>{
    if (operator==='+'||operator==='-'||operator==='×'||operator==='÷'){
        if(result.innerText===''){
            finishedNumber1=true
            isdecimalpoint=false;
            operatorContainer.innerHTML=(operator)
            return method=operator
        }
        else{
            firstNumber.innerHTML=result.innerHTML
            storeNumber1=result.innerHTML.split('')
            finishedNumber1=true
            isdecimalpoint=false;
            result.innerHTML=''
            secondNumber.innerHTML=''
            storeNumber2=[]
            operatorContainer.innerHTML=(operator)
            return method=operator
        }
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
    //checking second number exist or not to prevent error
    if(inputNumber==='='){
        if(storeNumber2.length>0){
            operate()
        }
        else{
            return ''
        }
    }
    if(inputNumber==='del'){
        if(finishedNumber1===false){
            storeNumber1.pop()
            firstNumber.innerHTML=resultInt(storeNumber1)
            isdecimalpoint=false;
        }
        else{
            storeNumber2.pop()
            isdecimalpoint=false;
            secondNumber.innerHTML=resultInt(storeNumber2)
        }
    }
//if user input clear, then clear all the data & variable
    if(inputNumber==='.'){
        if(isdecimalpoint===false){
            if(finishedNumber1===false){
                    storeNumber1.push(inputNumber)
                    firstNumber.innerHTML=resultInt(storeNumber1)
                }
            else{
                storeNumber2.push(inputNumber)
                secondNumber.innerHTML=resultInt(storeNumber2)
            }
        }
        isdecimalpoint=true
    }
/* if user input '.',will check they input the '.' before, if they did not input '.' before, push the '.' into array
and return the checking variable to true. if the checking variable is true, system will not take '.' into array */
    else{
        if(finishedNumber1===false&&inputNumber!=='c'&&inputNumber!=='del'&&inputNumber!=='='&&storeNumber1.length<9){
            storeNumber1.push(inputNumber)
            firstNumber.innerHTML=resultInt(storeNumber1)
            }
        if(finishedNumber1===true&&inputNumber!=='c'&&inputNumber!=='del'&&inputNumber!=='='&&storeNumber2.length<9){
            storeNumber2.push(inputNumber)
            secondNumber.innerHTML=resultInt(storeNumber2)
        }
        if(result.innerText!==''&&inputNumber!=='c'&&inputNumber!=='del'&&inputNumber!=='='){
            storeNumber1=[]
            finishedNumber1=false
            result.innerHTML=''
            secondNumber.innerHTML=''
            storeNumber2=[]
            operatorContainer.innerHTML=('')
            storeNumber1.push(inputNumber)
            firstNumber.innerHTML=resultInt(storeNumber1)
        }
    }
}
//if user input normal number, push it into array


const resultInt=(resultNumber)=>{
    return resultNumber.join('')
}
//function to join the number

