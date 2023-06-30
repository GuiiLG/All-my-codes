 function caculation() {
    event.preventDefault()
    const changeYear = document.querySelector('.resultadoY')
    const changeMonth = document.querySelector('.resultadoM')
    const changeDay = document.querySelector('.resultadoD')

    const day = document.querySelector('.dayI').value;
    const month = document.querySelector('.monthI').value;
    const year = document.querySelector('.yearI').value;
    
    const atualDAY = new Date().getDate();
    const atualMONTH = new Date().getMonth() + 1;
    const atualYEAR = new Date().getFullYear();
    
    if (month > 12 || day > 30 || year > atualYEAR && month > atualMONTH || day > atualDAY ) {
        window.alert('error, one of the arguments is invalid')
    }

    else {
        if (month >= atualMONTH && day > atualDAY) {
            let age = (atualYEAR - year) - 1
            let ageMonth = ((atualMONTH + 1) + (12 - month))
            let ageDay = (atualDAY + (30-day)) +1;
    
            changeMonth.innerText = ageMonth
            changeYear.innerText = age
            changeDay.innerText = ageDay
            
        }
        else if (month == atualMONTH && day == atualDAY) {
            let age = (atualYEAR - year)
            changeMonth.innerText = '0'
            changeYear.innerText = age
            changeDay.innerText = '0'
           
        }
        else {
            let age = (atualYEAR - year)
            let ageMonth = (((atualMONTH + 1) - (12 - month)) )*-1
            let ageDay = (atualDAY - (30-day)) +2;
            changeMonth.innerText = ageMonth
            changeYear.innerText = age
            changeDay.innerText = ageDay
        }
    }
    
    let ageDay = (atualDAY + (30-day)) +1;
    
    
    

}

