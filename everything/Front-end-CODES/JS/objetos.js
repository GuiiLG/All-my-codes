let students = [ 
    'Arthur',
    'alice',
    'joao',
    'carlos',
    'maria',
]
let items = [
    'chair',
    'broom',
    'hammer',
    'cup'
]
let changed = []

function capitalizar(objeto) {
    
    for (let i = 0; i < objeto.length; i++) {
        let upperCaseCharacter = objeto[i].charAt(0).toUpperCase()
        let slicedCharacters = objeto[i].slice(1)
        let capitilized = upperCaseCharacter + slicedCharacters
        changed[i] = capitilized   
    }
    return changed
}
function ordenar(objeto){
    return replace = objeto.sort(function(a,b){
        return a.localeCompare(b);
    });
}


console.log(capitalizar(items))
console.log(ordenar(changed))
console.log(capitalizar(students))
console.log(ordenar(changed))

export default {
    capitalizar: capitalizar,
    ordenar: ordenar
};

