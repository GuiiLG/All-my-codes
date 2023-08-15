 function caculation() {
    event.preventDefault()
    
    const element = { 
        changeYear: document.querySelector('.resultadoY'),
        changeMonth: document.querySelector('.resultadoM'),
        changeDay: document.querySelector('.resultadoD'),

        day: document.querySelector('.dayI').value,
        month: document.querySelector('.monthI').value,
        year: document.querySelector('.yearI').value,
        
        atualDAY: new Date().getDate(),
        atualMONTH: new Date().getMonth() + 1,
        atualYEAR: new Date().getFullYear(),
        
    }
    let age = element.atualYEAR - element.year 
    if (element.month < element.atualMONTH && element.day < element.atualDAY) {
        age--
        let ageMonth =  ((12 - element.month) + element.atualMONTH)-1
        let ageDay = ((30 - element.day) + element.atualDAY)

    }
    else  if (element.month >= element.atualMONTH && element.day >= element.atualDAY) {
        ageMonth = 
    }
    
    

}

