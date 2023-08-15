let question = document.querySelectorAll ('.question')
let answer = document.querySelectorAll ('.answer')
for (let i = 0; i <= 5; i++ ) {
   answer[i].style.display = 'none'
}



function showAnswer(id) {
   
   disableAnswer()
   
   if (answer[id].style.display == 'none') {
      answer[id].style.display = 'block'
      
      
   }
   else {
      answer[id].style.display = 'none'
   }
   
   
}
function disableAnswer() {
   for (let i = 0; i < answer.length; i++) {
      answer[i].style.display = 'none'
   }
}



