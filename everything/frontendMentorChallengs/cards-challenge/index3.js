const content = function(){
    console.log('testing')
    let countToDo = 0
    let countDoing = 0
    let countDone = 0

    // Main tag
    let main = document.querySelector('main')

    let buttonCreateCardBoard = document.querySelector('.buttonCreateCardBoard') 

    buttonCreateCardBoard.addEventListener('click', ()=>{
        let newCardBoard = new CreatingNewCardBoard()
    })

    class CreatingNewCardBoard{
        constructor(){
            this.CreatingCard()
            
        }
        CreatingCard(){
            this.cardBoardDiv = document.createElement('div')
            this.cardBoardDiv.setAttribute('class', 'otherCardBoard')
            this.cardBoardDiv.innerHTML = `
                <div class="CardBoardMenu">
                <div class ='headerOtherCard'> <h3>OTHER CARD(0)</h3> <span> <img class="closeOtherCard xis" src="8666595_x_icon.png"> </span>
                </div>
                <button class="addNewTask">
                    + a new task
                </button>
                </div>
                <div class="task">
                </div>
            `
            main.appendChild(this.cardBoardDiv)
            const addNewTaskButtons = this.cardBoardDiv.querySelectorAll('.addNewTask')
            
            addNewTaskButtons.forEach((el, i) => {
        
                if (el) { // Check if el is not null or undefined
                    el.addEventListener('click', () => {
                        cardClicked = el
                        let InputWindow = new Create_New_Task()
                        
                    })
                }
            })

            this.ClosingOtherCard()
            
        }

        ClosingOtherCard(){
            this.closeOtherCard = document.querySelectorAll('.closeOtherCard')
            this.closeOtherCard.forEach((el, i)=>{
                el.addEventListener('click', ()=>{
                    
                    this.father = el.parentNode.parentNode.parentNode.parentNode
                    this.father.classList.add('closingAnimation')
                    
                    
                    setTimeout(()=>{
                        main.removeChild(this.father)
                    }, 1000)
                    
                })
            })

        }
    } 







    // Selection the task buttons
    let button_Add_NewTask = document.querySelectorAll('.addNewTask')
    let cardClicked = 0
    // Adding a event Listener to the buttons addNewTask
    function addingEventListener(){
        button_Add_NewTask.forEach((el, i) => {
        
            if (el) { // Check if el is not null or undefined
                el.addEventListener('click', () => {
                    cardClicked = el
                    let InputWindow = new Create_New_Task()
                })
            }
        })
    }
    addingEventListener()

    // Creating Task
    class Create_New_Task {
        constructor(){
            this.CreatingInputWindow()
        }
        // Creating Input Window
        CreatingInputWindow(){
            // Creating Modal Overlay
            this.modalOverlay = document.createElement('div')
            this.modalOverlay.setAttribute('class', 'modalOverlay')
            main.appendChild(this.modalOverlay)

            
            // Creating input div
            this.divInput = document.createElement('div')
            this.divInput.setAttribute('class', 'WindowInput')
            this.divInput.innerHTML = `
                <div class='inputContent'>
                    <div class="headerInput">
                        <h2>Type the task below </h2>
                        <img class="closeInputDiv xis" src="8666595_x_icon.png">
                    </div>
                    <input type="text" class="inputCreateCard">
                    <button class="buttonInput">Create</button>
                </div>
            `
            // Selection the button close and adding an event listener to close the window
            let buttonClose = this.divInput.querySelector('.closeInputDiv')
            buttonClose.addEventListener('click', ()=>{
                main.removeChild(this.divInput)
                main.removeChild(this.modalOverlay)
            })
            
            // Selecting the input button and input 
            let buttonInput = this.divInput.querySelector('.buttonInput')
            let inputCreateCard = this.divInput.querySelector('.inputCreateCard')
            main.appendChild(this.divInput)

            // Adding a event listener to the input button to create a task
            buttonInput.addEventListener('click', ()=>{
                this.taskText = inputCreateCard.value
                this.CreatingTask()

                main.removeChild(this.divInput)
                main.removeChild(this.modalOverlay)
                
            })
        }

        // Creating the task
        CreatingTask() {
            // Task created
            this.newTask = document.createElement('div')
            this.newTask.setAttribute('class', 'taskCreate')
            this.newTask.innerHTML = `
            ${this.taskText}  <img class="deleteTask xis" src="8666595_x_icon.png"> 
            `
            // Selecting the x button to delete a task and adding a event on it
            let deleteTask = this.newTask.querySelectorAll('.deleteTask')
            deleteTask.forEach((el, i)=>{
                el.addEventListener('click', ()=>{
                    cardClicked.parentNode.removeChild(el.parentNode)
                })
            })
            
            
            cardClicked.parentNode.appendChild(this.newTask)
        }
    }
    console.log('testing')

}
content()

var login = require('./login')
login()



