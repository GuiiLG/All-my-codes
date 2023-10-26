let mainImage = document.querySelector('.mainImage')
let body = document.querySelector('body')
let main = document.querySelector('main')
  
let addCart = document.querySelector('.buttonCart')
addCart.addEventListener('click', ()=>{
    console.log('ola')
})
mainImage.addEventListener('click', ()=>{
    let div_Modal_Overlay = document.createElement('div')
    div_Modal_Overlay.setAttribute('class', 'modal-overlay')
    body.appendChild(div_Modal_Overlay)

    let img = document.createElement('img')
    img.src = 'everything/frontendMentorChallengs/cards-challenge/1976055_edit_edit document_edit file_edited_editing_icon.png'
    div_Modal_Overlay.appendChild(img)
})
