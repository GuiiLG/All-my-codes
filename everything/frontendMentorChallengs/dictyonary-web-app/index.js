let wordName = document.querySelector('.wordName')
let meaning = document.querySelector('.meaning')
let phonetic = document.querySelector('.phonetic')
let audio = document.querySelector('.audio')
let audioSRC = document.querySelector('.audioSRC')
let buttonInput = document.querySelector('.buttonInput')


function getWord(word) {
    let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network not okay')
            }
            return response.json()
        })
        .then(data => {
            const firstMeaning = data[0]?.meanings[0]?.definitions[0]?.definition;

            if (firstMeaning) {
                meaning.innerHTML = firstMeaning;
            } else {
                meaning.innerHTML = "No definition found.";
                console.log('no definition')
            }

            const phonetics = data[0].phonetics[1].text
            phonetic.innerHTML = phonetics
            
            const audioDOM = data[0].phonetics[0].audio
            audioSRC.setAttribute('src', audioDOM)
            console.log(audioDOM)
            
            audio.addEventListener('click', ()=>{
                
                if (audioSRC.paused){
                    audioSRC.play()
                }
                else {
                    audioSRC.pause()
                }
            })


        })
        data.name
}


buttonInput.addEventListener('click', ()=>{
    let inputWord = document.querySelector('.inputWord').value
    getWord(inputWord)
    wordName.innerHTML = inputWord
})

