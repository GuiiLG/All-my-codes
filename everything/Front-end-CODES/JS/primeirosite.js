const mainONE = document.querySelector('.one');
const mainTWO = document.querySelector('.two');
const selected = document.querySelector('.selected');
const ratingButton1 = document.querySelector('#button1');
const ratingButton2 = document.querySelector('#button2');
const ratingButton3 = document.querySelector('#button3');
const ratingButton4 = document.querySelector('#button4')
const ratingButton5 = document.querySelector('#button5');

let rating = 0
var id = 0
mainTWO.style.display = 'none';

function change(number) {
    ratingButton1.style.backgroundColor = 'hsl(215, 21%, 23%)';
    ratingButton1.style.color = 'hsl(216, 12%, 54%)';
    ratingButton2.style.backgroundColor = 'hsl(215, 21%, 23%)';
    ratingButton2.style.color = 'hsl(216, 12%, 54%)';
    ratingButton3.style.backgroundColor = 'hsl(215, 21%, 23%)';
    ratingButton3.style.color = 'hsl(216, 12%, 54%)';
    ratingButton4.style.backgroundColor = 'hsl(215, 21%, 23%)';
    ratingButton4.style.color = 'hsl(216, 12%, 54%)';
    ratingButton5.style.backgroundColor = 'hsl(215, 21%, 23%)';
    ratingButton5.style.color = 'hsl(216, 12%, 54%)';

    rating = number 
    
     if (rating === 1){
        ratingButton1.style.backgroundColor = 'white';
        ratingButton1.style.color = 'orange';
        
        
    }
    else if (rating === 2) {
        ratingButton2.style.backgroundColor = 'white';
        ratingButton2.style.color = 'orange';
        
    }
    else if (rating === 3) {
        ratingButton3.style.backgroundColor = 'white';
        ratingButton3.style.color = 'orange';
        
    }
    else if (rating === 4) {
        ratingButton4.style.backgroundColor = 'white';
        ratingButton4.style.color = 'orange';
        
    }
    else if (rating === 5) {
        ratingButton5.style.backgroundColor = 'white';
        ratingButton5.style.color = 'orange';
       
    }
    
    return rating
    

}

function thankU() {
    if (rating === 0) {
        window.alert('Select a option, please!')
    }
    else {
        mainTWO.style.display = 'block';
        mainONE.style.display = 'none';
        selected.innerHTML = `You selected ${rating} out of 5`
    }

}