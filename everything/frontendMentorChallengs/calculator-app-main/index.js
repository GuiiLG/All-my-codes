let numbers = document.querySelectorAll('.numbers')
let input = document.querySelector('.input')
let signals = document.querySelectorAll('.signal')
let del = document.querySelector('.deleter')
let reset = document.querySelector('.resetSize')
let equal = document.querySelector('.red')
console.log(numbers)

numbers.forEach((el)=>{
    el.addEventListener('click', ()=>{
        let number = el.innerHTML
        input.innerHTML = input.innerHTML + number
    })
})
signals.forEach((el)=>{
    el.addEventListener('click', ()=>{
        let signal = el.innerHTML
        input.innerHTML = input.innerHTML + signal
    })
})
del.addEventListener('click', ()=>{
    let last = input.innerHTML.slice(0, -1);
    input.innerHTML = last
})
reset.addEventListener('click', ()=>{
    input.innerHTML = ""
})
equal.addEventListener('click', () => {
    try {
        let result = eval(input.innerHTML);
        input.innerHTML = result; // Move this line inside the try block
    } catch (error) {
        window.alert('Something went wrong: ' + error); // Show the error message in the alert
    }
});
