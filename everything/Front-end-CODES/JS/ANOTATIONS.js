
 function numeros(...valores){
  let soma = 0 
  let tamanho = valores.length
  for (let i = 0; i < tamanho; i++ ){
    soma+=valores[i]
    console.log(valores[i])
  }
  return soma
}
console.log(numeros(10,2,5))


//Comentários  em linhas
/* Mais de uma linha
  

termina onde eu quiser*/

/* JAVA SCRIPT 
String- É uma cadeia de caracteres
pode usar: "", '', ``(permite quebra linhas e fazer expressões aritméticas.)
console.log(`Olá mundo aiaiaaiaii ${1+1}`)

Numbers-
33// inteiros
12.5// float
NaN // Not a number
Infinity / Infinito
console.log(12 + 5)

Boolean-
True or False

Null-
Nulo != Undefined

Object-
Objeto
Propriedades/ Atributos

console.log({
    name: "eu",
    idade: 18,
    andar: function() {
        console.log("andar")
    }
})

Array (Vetores)
Uma lista
Salva dados

console.log ([
    "X",
    "Y",
])

Declaração de variável:
var, let(só funciona quando esta dentro do mesmo scopo) ou const(constante)
var name = "Luigi"

let name, age
console.log(name, age)
console.log('o ' + name ' tem ' + age 'anos')

Obeject:
const person = {
    name: "Jhon",
    age : 30,
    weight: 70.5,
}
console.log("O nome dele é " + person.name + " ele tem" + person.age) 
//or
console.log(`His name is ${person.name}`)

Array:
const animals= [
    'Lion',
    'Monkey',
    'Dog',
]
console.log(`The zoo has a ${animals[0]}`)

Array com construtor:
let myArray = new Array ('a', 'b', 'c')
let myArray = new Array (10)
array.push('')-> coloca elementos no final do array
array.unshift('sql')->coloca elementos no começo do array
array.pop()-> remove o elemento final
techs.shift() -> remove do começo
array.slice(1,1) ->  pega somente uns elementos do array
array.splice(1(posição),1(quantos))
array.indexOf('') -> qual o index de um elemento do array

-->FUCTIONS<--
function sla() {
    console.log ("OI")
    console.log ("OLÁ")
}
sla()
FUCTION : agrupa o bloco de código que pode ser usado posteriomente
OBS: You can use fuctions in variables as you can see here :

let sum = function(number1, number2) {
    console.log(number1+ number2) 
}
let number10 = 10
let number20 = 10
sum (number10,number20)

const sum = function(number1, number2) {
    total=(number1+ number2) 
    return total
}
let number10 = 10
let number20 = 10
sum (number10,number20)
console.log(`A soma é ${sum(number1, number2)}`)

window.prompt/alert (cria uma janela com uma mensagem)
prompt(ao receber uma valor o valor independente de ser um número é do tipo inteiro)

var nome = window.prompt("Qual seu nome ?")
window.alert (`É um prazer te conhecer ${nome}, Seja bem vindo`)

pode mudar o tipo do dados com toString.variável ou String(variável)
var n1 = Number(window.prompt("Digite um número"))
var n2 = Number(window.prompt("Digite outro número"))
var s = n1+n2
window.alert(s)

var s = 'java'
String:
s.length -> Conta a quantidade de letras
s.toUpperCase() -> deixa em letra maiscula
s.toLowerCase() -> deixa em letra minúscula
s.split("o que vc quer separar/ ex: o")(separa as palavras)
s.join("") -> junta a frase com alguma coisa que você queria
s.includes('') -> verifica se tem alguma coisa retornando um va-
lor  booleano
s.from(word)(transforma cadeia de caracteres em elementos de
um array)
replace -> colocar um novo elemento 
Number:
n.toFixed(2) ->determina a quantidade de casas decimais
n.toFixed(2).replace('.', ',') -> Substitui o ponto por vírgula
n.toLocaleString('pt-BR', Style: 'currency' , currency: BRL'})

Operadores Aritméticos:
+
-
/
*
%
**

n+= 4 (soma o valor de n com a operação aritmética em sequência)
n -= 4
n++ (o n soma o seu valor com 1 )(pos-incremento)
++n (pre-incremento)
>
<
>=
<=
==
!=
=== (mesmo valor e mesmo tipo) 

lógicos
!negação (not)
&& conjunção(e)
|| disjunção (our)
Primeiro o ! depois o && depois o ||

Ternário
?
:
média >=6 ? 'Aprovador':'Reprovado'

var name = window.prompt(`Qual seu nome ?`)
    document.write(`Seu nome tem ${name.length} letras`)



var a = window.document.getElementById('area')
     
      function clicar() {
       
        a.innerText = 'clicou'
        a.style.background ='aqua'
      }
      function entrar(){
        a.innerText = 'entrou'
        a.style.background = 'green'
      }
      function sair(){
        a.innerText= 'saiu'
        a.style.background =' red

        ouuuuu
    
    var a = window.document.getElementById('area')
    a.addEventListener('click', clicar)  
    a.addEventListener('mouseenter', entrar) 
    a.addEventListener('mouseout', sair) 
      function clicar() {
       
        a.innerText = 'clicou'
        a.style.background ='aqua'
      }
      function entrar(){
        a.innerText = 'entrou'
        a.style.background = 'green'
      }
      function sair(){
        a.innerText= 'saiu'
        a.style.background =' red'
      }

Spread:
let n3= [...n1, ...n2]

Arrow function:
let sayMyName = () => {
     console.log ('luigi')
}
 sayMyName()

 Callback:
    Chama uma função de volta

Function constructor:
    
    const luigi = new Person("v1", "v2", ('return v1+ v2'))

Prototype chain:]

new -> cria um objeto
function rest : recebe paramêtros indefinidos
function numeros(...valores){
  let soma = 0 
  let tamanho = valores.length
  for (let i = 0; i < tamanho; i++ ){
    soma+=valores[i]
    console.log(valores[i])
  }
  return soma
}
console.log(numeros(10,2,5))


função anônima:
let f = function(v1, v2) {
  return v1 + v2
}
console.log(f(2,1))
funções geradoras : é uma função que é utilizada quando você quer retornar valores indeterminados pela função
yield: pausa temporariamente a função
return: encerra a função de vez
function* cores(){
  yield "vermelho"]
  yield "azul"
}
const itc = cores()
console.log(itc.next().value)-> vai pecorrendo a função
console.log(itc.next().value)
console.log(itc.next().value)

outro exemplo contador:
let contador = 1 
function* background(){
    while (true) {
        yield contador++
    }
  }
  const change = background()
 
  for (i=0; i < 10; i++){
    console.log(change.next().value)
  }


  MAP: ele vai usar todos os elementos de um array ou objeto
 ex: const cores = ['azul', 'vermelho']
cores.map(
  (el, aa) =>{
    console.log(el, aa)
  }
)
outro exemplo:
let div = document.getElementsByTagName('div')
div = [...div]
div.map((el)=>{
    console.log(el.innerHTML)
})
OBS: o primeiro parametro da função é os elementos do array e o segundo é a posição do array
Conclusão: o map vai ser utilizado quando você quiser pecorrer por todos os elementos do array, diferentemente do for
que pode ser usado assim mais é aconselhável usa-lo quando tiver a intenção de parar no meio e n pecorrer por todos
os arrays


-->Conditions<--
if / else:
let  temperature = Number(window.prompt("Qual a temperatura?"))
   if (temperature >= 37) {
    document.write("Febre")
} else if(temperature < 37 && temperature > 36) {
    document.write("Está começando a fica febril")
} else  {
    document.write("Saudável")
}
switch:
bem parecido com o if
switch (condition) {
    case 'a':
        console.log('a')
        break
    case 'b':
        console.log("b")
    default:
        console.log("acabou")
        break
    
}

throw :
function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

-->Repetion <--
for:
for (let i = 10; i >= 0; i--) {
    document.write(i) 
}


for (let i = 10; i >= 0; i--) {
    if(i===5){
        break;( para o i) ou continue;(pula um número)
    }
    document.write(i) 
}

for of: seleciona os elementos dentro da cadeia do objeto
let name = "Luigi"
for (let char of name ) {
    console.log (char)
}

for in: seleciona a posição
let person = {
    name: 'Luigi' ,
    age: 18,
}
for (let property in person) {
    console.log (person[0])
}


while:
let i = 0
while (i < 10) {
    console.log(i)
    i++;
}
do while(executa o bloco de comando pelo menos uma vez idependente de ser falso ou verdadeiro)
do {

} while(expressao)

break: para a expressão do looping automaticamente
continue: so para uma expressão, depois continua com a proxima interação

EXERCICIOS:
function getScore() {
    let nota = window.prompt ("Digite uma nota do Sistema numérico:")

    if (nota >=90) {
        document.write('A')

    } else if (nota <= 89 && nota >= 80) {
        document.write('B')
    } else if (nota <= 79 && nota >= 70) {
        document.write('C')
    } else if (nota <= 69 && nota >= 60) {
        document.write('D')
    } else if (nota < 60) {
        document.write('F')
    }

}

Exercicio02:
let family = {
    incomes : [2500 , 3200, 250.43, 360.45],
    expenses : [320.34, 124.45, 176.87, 300],
 }

 function sum(array) {
   total = 0 

   for(let value of array) {
      total += value
   }

   return total
 }

 
 
 function calculateBalance() {
   const  calculateIncomes = sum(family.incomes)
   const calculateExpenses = sum(family.expenses)
   const total = calculateIncomes - calculateExpenses

   let balanceText = 'negativo'
   if (total >= 0) {
      balanceText = 'positivo'
   }
   console.log (`Seu saldo é ${balanceText} : ${total}`)
 } 
 calculateBalance()
 
 Exercicio03:
  
function transformDeegre(temperature) {
    const celsiusExists = temperature.toUpperCase().includes('C')
    const fahExists = temperature.toUpperCase().includes('F')
    if (!celsiusExists && !fahExists){
      throw new Error('Grau não indentificado')
    }
    // C - > F
    if (celsiusExists) {
      let updatedDeegre = temperature.replace('F', '');
    let result = (updatedDeegre) => (updatedDeegre) * 9/5 + 32
    return result (updatedDeegre) + 'C'
    }
    // F - > C
    else if (fahExists)  {
      let updatedDeegre = temperature.replace('C', '')
    let result = (updatedDeegre) =>  (updatedDeegre - 32) * 5/9 
    return result (updatedDeegre) + 'C'
 }
 try {
  transformDeegre('10z')
 } catch (error) {
  console.log(error.message)
 }

 
}

DOM-------------------------------------------------------------------------------------------------------------------------------
DOM:
Document Object Model: Modelos de objetos dentro do navegador
que vai dar acesso as dados.
window.document.getElementsByTagName('p')[0]( seleciona elementos
    pela tag e localiza qual das tag é pelo [0])
     window.document.write (p1.innerText)

DOM é o elemento html convertido para um objeto de javascript
uma API que interage e representa o html
javascript usa DOM para se conectar ao html 
arvore DOM:
WINDOW 
DOCUMENT
HTML
TAGS HTML

Formas de conctar:-------------------------------------------------------------------------------------------------------------------
getElementsByClassName(html colection)
getElementsById( element)
getElementsByTagName(html colection)
querySelector (element)
querySelectorAll (Node list)

document. umas das formas acima ('nome')
ex id:<body>
 <h1 id="d">OLÁ MUNDO</h1>

  <script >
    console.log(  document.getElementById('d'))
  </script>
  </body>

ex class: 

<body>
  
  <h1 class="one">Olá mundo</h1>
  <p class="one">pre</p>
</body>
<script>
  console.log(document.getElementsByClassName('o'))
</script>

ex tagname: <body>
  
  <h1 class="one">Olá mundo</h1>
  <p class="one">pre</p>
</body>
<script>
  console.log(document.getElementsByTagName('h1'))
</script>

ex querySelector: é igual ao do css e ele sempre pega o primeiro q aparecer
<body>
  
  <h1 class="one">Olá mundo</h1>
  <p class="one">pre</p>
</body>
<script>
  console.log(document.querySelector('style'))
</script>


Manipulando CONTEÚDOS:
textContent: muda o conteúdo ou adiciona. ou apenas recebe o texto que está dentro dele.
<body>
  
  <h1 class="one">Olá mundo</h1>
  <p class="two">pre</p>
</body>
<script>
  const element = (document.querySelector('h1'))
  element.textContent += "DISSE ERRADO"
</script>

innerText: troca o texto interno do html
innerHTML: troca o texto interno do html com tags
value: atribue um valor ao input
 <body>
 <input type="text">
</body>
<script>
const put = (document.querySelector('input'))
  put.value = 'ola'
</script>

Manipulando atributo:
parseINT( transforma uma string em inteiro)
setAttribute('id', alguma tag)

mudar o estilo em javascript:
<script>
  const element = (document.querySelector('body'))

  element.style.backgroundColor = 'red';

</script>

A propriedade classList tem vários métodos, como add(), remove(), toggle(se a classe não existir ele adiciona se n
  existir ele tira ) e contains()

adiciona uma nova classe:
var elemento = document.querySelector('.exemplo');
elemento.classList.add('outra-classe');
///
css :
.active {
    background-color: green;
  }
  .desactive {
    background-color: red;
java:
const element = (document.querySelector('body'))

  element.classList.add('desactive');

</script>

firstChild:

Propriedade que retorna o primeiro filho de um elemento.
Isso inclui todos os tipos de nós, como nós de texto, comentários e elementos.
Pode ser útil para acessar o primeiro elemento filho dentro de um elemento pai.
Se não houver um nó filho, retornará null.
lastChild:

Propriedade que retorna o último filho de um elemento.
Assim como firstChild, inclui todos os tipos de nós.
Útil para acessar o último elemento filho dentro de um elemento pai.
Se não houver um nó filho, retornará null.
parentNode:

Propriedade que retorna o elemento pai de um elemento.
Útil para navegar de um elemento filho para o seu contexto superior.
Se o elemento não tiver um pai (caso do elemento <html>), retornará null.
nextSibling:

Propriedade que retorna o próximo irmão de um elemento.
Inclui todos os tipos de nós, como elementos, nós de texto e comentários.
Se não houver próximo irmão, retornará null.
previousSibling:

Propriedade que retorna o irmão anterior de um elemento.
Como nextSibling, abrange diversos tipos de nós.
Se não houver irmão anterior, retornará null.
childNodes:

Propriedade que retorna uma lista de todos os filhos de um elemento.
Inclui todos os tipos de nós (elementos, nós de texto, comentários, etc.).
Retorna um objeto do tipo NodeList, que é semelhante a um array, mas não possui todos os métodos de array.
Pode ser usado para iterar sobre todos os filhos de um elemento.
querySelector:

Método que retorna o primeiro elemento que corresponde ao seletor CSS especificado.
Útil para selecionar elementos com base em seletores complexos.
Retorna null se nenhum elemento corresponder ao seletor.
querySelectorAll:

Método que retorna todos os elementos que correspondem ao seletor CSS especificado.
Retorna uma coleção do tipo NodeList contendo os elementos correspondentes.
Pode ser usado para selecionar vários elementos de uma vez.
setAttribute:

Método que define o valor de um atributo em um elemento.
Pode ser usado para adicionar, atualizar ou remover atributos em elementos HTML.
Aceita dois argumentos: o nome do atributo e o valor a ser definido.
getAttribute:

Método que retorna o valor de um atributo em um elemento.
Pode ser usado para obter o valor de um atributo específico.
Essas são as explicações detalhadas das propriedades e métodos que você mencionou. Eles são fundamentais para a manipulação do DOM e para a criação de interações dinâmicas em páginas web usando JavaScript.



hasChildNodes(): olha se o elemento tem filhos

createElement():

Criando elementos no html:
const div = document.createElement('div');
div.innerText = 'ola';
const body = document.querySelector('body');
body.append(div); (adiciona depois)
body.prepend(div); (adiciona antes)
body.insertBefore(div(tag q queradicionar), body(tag q vai adi
  cionar antes))

Colocando eventos no html:
on na tag html 
onclick: 
<body>
   <h1 onclick="print()">body</h1>
 
</body>
<script>
function print() {
  console.log('print')
}

onkeydown (ativa quando aperta a tecla)
onkeyup (ativa quando solta a tecla)
adicionando via javascript:

const h1 = document.querySelector('h1');
h1.addEventListener('click', print);
                    evento    nome da função
function print() {
  console.log('print')
}

ou 
h1.onclick = print;
function print() {
  console.log('print');
}
ps: ele so executa uma função que esta mais próxima, então n é muito
recomendado


Colocando IMAGEM:
button {
    padding: 20px;
    border: none;
    background-color: darkorchid;
    color: white;
    border-radius: 10px;
    margin-top: 50vh;
    margin-left: 50vh;
    cursor: pointer;

  }
 
  
</style>

<body>
  <button onclick="macaco()">THE BUTTON</button>
  <span id="imagem"></span>
</body>
<script>
  function macaco() {
     document.getElementById("imagem").innerHTML = "<img src='IMG/tenis1.jpg'>"
    
    
  }
</script>


setTimeout : faz meio que uma agendamento de uma função, quanto tempo ela vai durar

eval: transforma uma string em uma expressão e resolvendo ela

função construtora (inicia com letra maiuscula)

this : aponta para um objeto dependendo de onde o 
objeto esta
 function media(nome) {
  this.nome = nome
}


EX : Se o this estiver no escopo global ele aponta
para o window se é o devTols, se for o node é o global
se ele estiver dentro de um objeto, ele aponta para o objeto

parseInt: transforma uma string em int

let obj = {
  prop: 100
  f : function() { return this.prop}
}
console.log(obj.f)
NESSE CASO ELE ESTA APONTANDO PARA O OBJETO

-bind, call e apply
bind: cria uma nova função dentro de um objeto.

function thisBindExemple() {
  console.log(this)
}
const obj = {exemplo: "exemplo"}
thisBindExemple = thisBindExemple.bind(obj)
thisBindExemple()
call: muda o objeto no qual o this vai mandar
apply: lista de argumentos

setTimeout: roda alguma coisa depois dos segundos determinados:

function ola(){
  console.log('Ola mundo')

}
setTimeout(ola, 3000)

clearTimeout: tira o timeout:
function ola(){
  console.log('Ola mundo')

}
let timer = setTimeout(ola, 3000)
clearTimeout(timer)

setInterval: determina uma função que vai ser executada a cada tempo que vc determinou
function ola(){
  console.log('Ola mundo')

}
 setInterval(ola, 3000)

 clearInterval: limpa o intervalo

 POO
 programação orientada a objetos:
 Ter uma boa organização no seu código e boas práticas
 Cria partes do código que possa ser REUTILIZADAS e economize tempo e código

 Classes: molde para criação de um objeto
 Objeto: sao criados atravès das classes cada um com propriedades diferentes

 class Produto {
  constructor() {

  }

 }
*/


