const main = document.querySelector('main');
const section = document.querySelector('section');
const h6 = document.querySelector('h6');
section.style.display = 'none';
function send() {
    
    const input = document.querySelector('input').value;
    main.style.display = 'none';
    section.style.display = 'block';
    h6.innerHTML = `A confirmation email has been sent to ${input}. 
    Please open it and click the button inside to confirm your subscription.`;

}
function back() {
    event.preventDefault();
    location.reload();
    
}