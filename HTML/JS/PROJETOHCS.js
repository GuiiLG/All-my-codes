const main = document.querySelector('main');
const nav =document.querySelector('nav');
const rating = document.querySelector('.rating');
nav.style.display = 'none';
function change(number) {
    rating.innerHTML = `You selected ${number} out of 5`;
    main.style.display = 'none';
    nav.style.display = '';
    document.onkeyup = function(e) {
        e = e || window.event; //compatibilidade com navegadores antigos IE
      
        if (e.keyCode == 27) {
          history.back(); //ou history.go(-1); 
        }
      }
    }



