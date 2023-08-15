
function add(number) {
   var numero = document.getElementById('resultado').innerHTML 
   document.getElementById('resultado').innerHTML = numero + number 
    


}
function operador(sinal) {
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + sinal
    let sum  = numero + sinal
    

}
function nada() {
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = '' 
}
function equalDOM() {
    var sum = document.getElementById('resultado').innerHTML;
    if (sum){
        document.getElementById('resultado').innerHTML = eval(sum)
    }
}
 console.log('olá mundo');
 
