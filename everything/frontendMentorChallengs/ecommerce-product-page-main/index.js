let mainImage = document.querySelector('.mainImage')
let body = document.querySelector('body')
let main = document.querySelector('main')
  
let addCart = document.querySelector('.buttonCart')
addCart.addEventListener('click', ()=>{
    console.log('ola')
})
mainImage.addEventListener('click', ()=>{
    body.classList.add('bodyOpacity')

    product_Open.style.backgroundImage = `url(images/image-product-1.jpg)`;
    let product_Open = document.createElement('div')
    product_Open.classList.add('product_Open')
    document.main.appendChild(product_Open)
    
})
