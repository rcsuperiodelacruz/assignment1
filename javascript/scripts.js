// constants
const darkButton = document.querySelector('button#darkThemeButton');
const cancelButton = document.querySelector('#cancelButton');
const notes = document.querySelector('textArea')
const saveButton = document.querySelector('#saveButton')
const newNoteButton = document.querySelector('#newNote')
// event listeners
darkButton.addEventListener('click', darkTheme)
cancelButton.addEventListener('click', hide)
newNoteButton.addEventListener('click', unHide)

// making array

let allNotes = [{title:'note one', body:'this is note one'},{title:'note two', body:'this is note two'}]



function darkTheme(){
    const element = document.querySelector('body')
    const aside = document.querySelector('aside')
    const allText = document.querySelectorAll('*')
    element.classList.toggle('darkBackground')
    aside.classList.toggle('darkAside')
    console.log('hi')
    if(darkButton.textContent.includes('Dark')){
        darkButton.textContent = 'Light Theme'
    }else{
        darkButton.textContent = 'Dark Theme'

    }
    for(let i=0;i<allText.length;i++){
        allText[i].classList.toggle('colorText')

    }
}

function hide(){
    notes.classList.toggle('hide')
    saveButton.classList.toggle('hide')
    cancelButton.classList.toggle('hide')


}

function unHide(){
    if(notes.classList.contains('hide')){
        notes.classList.toggle('hide')
        saveButton.classList.toggle('hide')
        cancelButton.classList.toggle('hide')
    
    }else{
        notes.value = ''
    }
}


function saveNotes(){

}