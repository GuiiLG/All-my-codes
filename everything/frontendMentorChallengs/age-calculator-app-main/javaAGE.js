    
const resultadoY = document.querySelector('.resultadoY')
const resultadoD = document.querySelector('.resultadoD')
const resultadoM = document.querySelector('.resultadoM')
function caculation(){
    event.preventDefault()
    let date = new Date()
    let atualDay = date.getDate()
    let atualMonth = date.getMonth() + 1
    let atualYear = date.getFullYear()

    
    

    const dayI = document.querySelector('.dayI').value
    const monthI= document.querySelector('.monthI').value
    const yearI = document.querySelector('.yearI').value
    
    // Verify if the numbers typed is valid
    if (dayI > 30 || monthI >12 || yearI >= atualYear) {
        window.alert('Digit a valid number')
    }
    // If the numbers get valid so run this part
    else {
        // If the birthday not happens yet
        if (monthI >= atualMonth || monthI === atualMonth && dayI > atualDay ){
            let age = (atualYear - yearI) - 1
            resultadoY.innerHTML = age
            //  If the day birthday already happend
            if (dayI >= atualDay) {
                let month = 12- (monthI - atualMonth) 
                resultadoM.innerHTML = month
                

                let day =  30 -((-1)*(atualDay - dayI))
                resultadoD.innerHTML = day
            }
            //  If the day birthday not happend
            else {
                let month =  ((monthI -  atualMonth) + (12 - atualMonth)) - 1
                resultadoM.innerHTML = month
                

                let day = 30 - ((-1)* (dayI + atualDay))
                resultadoD.innerHTML = day
            }

            
             
        }
        //  If the  birthday already happend
        else {
            let age = atualYear - yearI
            resultadoY.innerHTML = age

            
            //   if the day not  happens yet
            if (dayI >= atualDay){
                let month = (atualMonth - monthI) -1
                resultadoM.innerHTML = month

                let day =  30 -((-1)*(atualDay - dayI))
                resultadoD.innerHTML = day

            }
            // if the day already happend 
            else {
                let month = (atualMonth - monthI) 
                resultadoM.innerHTML = month

                let day = 30 - ((-1)* (dayI + atualDay))
                resultadoD.innerHTML = day
            }
                
            
            

        }

    }
}





       
        
