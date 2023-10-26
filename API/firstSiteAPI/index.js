const url = "https://api.adviceslip.com/advice"

function getADVICE(){
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            id.textContent = 
            JSON.stringify(data.slip.id)
            advice.textContent = 
            JSON.stringify(data.slip.advice)
    })
        .catch(error => console.error(error))
}
getADVICE()

const random = document.querySelector('.random')

random.addEventListener('click', ()=>{
    location.reload()
})