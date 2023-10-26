const url = 'https://restcountries.com/v3.1/all'

let countries = document.querySelector('.countries') 
let newCountrySquare;

// Creating variables to each country characteristc
let countryName = []
let countryFlag = []
let countryPopulation = []
let countryRegion = []
let countryCapital = []
// FETCHING API
fetch(url)
    .then(response =>{
        // Look for error
        if (!response.ok){
            throw new Error('Network not okay')
        }
        else {
            return response.json()
        }
    })
    .then(data =>{
        
        
        // Creating variables to each country characteristc
       


        data.forEach((el, i)=>{
            // Getting all the countries characteristics and pushing it for the variable

            countryName.push(data[i].name.common.toUpperCase())
            countryFlag.push(data[i].flags.png)
            countryPopulation.push(data[i].population)
            countryRegion.push(data[i].region)
            countryCapital.push(data[i].capital)
        })
        

        let dataLength= data.length
        
        
        newCountrySquare = new CreatingNewCountryCard(countries, countryFlag, countryName,countryCapital, countryPopulation, countryRegion, dataLength)
        
       
    })


let countriesSquaresCount = []
// Creating Country card
class CreatingNewCountryCard {
    constructor(countriesContainer, flag, name, capital, population, region, dataLength){
        
        for (let i = 0; i < dataLength; i++){

            this.countriesSquares = document.createElement('div')
            this.countriesSquares.setAttribute('class', 'countriesSquares')

            this.flagImage = document.createElement('img')
            this.flagImage.classList.add('flag')
            countriesContainer.appendChild(this.countriesSquares)

            countriesSquaresCount.push(this.countriesSquares)

            countriesSquaresCount[i].innerHTML = `
                <img  class='flag' src ='${flag[i]}'>
                <div> Name:${name[i]} </div>
                <div> Capital:${capital[i]} </div>
                <div> Population:${population[i]} </div>
                <div> Region :${region[i]} </div>
            `
            
            
        }
        let flagEvent = document.querySelectorAll('.flag')
        flagEvent.forEach((el, i)=>{
            el.addEventListener('click', ()=>{
                console.log('helooooooo')
            })
        })
    }

}
// Creating Filtering
let header = document.querySelector('header')
let buttonSearch = document.querySelector('.buttonSearch')
let count = 0;
let countrySearch= 0
let buttonCount = 0
buttonSearch.addEventListener('click', ()=>{
    count ++
    
    let inputSearch = document.querySelector('.inputSearch').value.toUpperCase()
    
        if (countryName.includes(inputSearch)){
            if (buttonCount < 1){
                let buttonHome = document.createElement('button')
                buttonHome.setAttribute('class', 'buttonHome')
                buttonHome.innerHTML= 'HOME'
                header.appendChild(buttonHome)
                buttonCount ++
                buttonHome.addEventListener('click', ()=>{
                location.reload()
                
            })
            
            
            
            if (count <= 1) 
                countriesSquaresCount.forEach((el, i)=>{
                    if (inputSearch !== countryName[i]) {
                        countries.removeChild(el)
                        console.log('ola')
                    }
                    else if (inputSearch === countryName[i]){
                        countrySearch = el
                    }
                })    
                    
            }
            
            else if (count > 1) {
                if (countrySearch === 0) {
                    
                }
                else {
                    countries.removeChild(countrySearch)
                }
                countriesSquaresCount.forEach((el, i)=>{ 
                    countries.appendChild(el)
                })   
                countriesSquaresCount.forEach((el, i)=>{
                    if (inputSearch !== countryName[i]) {
                        countries.removeChild(el)
                        
                    }
                    else if (inputSearch === countryName[i]){
                        countrySearch = el
                        
                        
                    }
                })
                    
            } 
        }    
        else if (!countryName.includes(inputSearch)) {
            window.alert('This country dont exists')
        }
            
    
    
})



