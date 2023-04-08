// constants
const darkButton = document.querySelector('button#darkThemeButton');
const cancelButton = document.querySelector('#cancelButton');
const notes = document.querySelector('textArea')
const saveButton = document.querySelector('#saveButton')
const newNoteButton = document.querySelector('#newNote')
const listItem = document.createElement('li');
const ulElement = document.querySelector('ul');
const notesContainer = document.querySelector('#notes')

// event listeners
darkButton.addEventListener('click', darkTheme)
cancelButton.addEventListener('click', hide)
newNoteButton.addEventListener('click', unHide)
saveButton.addEventListener('click', saveNotes)
notesContainer.addEventListener('click',changeTextBox)
// making array

let allNotes = [{title:'note one', body:'this is note one'},{title:'note two', body:'this is note two'}]



function darkTheme(){
    const element = document.querySelector('body')
    const aside = document.querySelector('aside')
    const allText = document.querySelectorAll('*')
    element.classList.toggle('darkBackground')
    aside.classList.toggle('darkAside')
    notes.classList.toggle('darkTextBox')
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
    const noteName = prompt('what is the title your notes')
    const noteObject = {title:noteName, body:notes.value}
    console.log(noteObject)
    allNotes.push(noteObject)
    console.log(allNotes)
    let li = document.createElement("li")

    // listItem.innerText = noteName
    // console.log(listItem.innerText)
    // ulElement.appendChild(listItem)
    // listItem.classList.add('.colorText')
    for(let i = 0; i<allNotes.length;i++){
        li.innerText = allNotes[i].title
        console.log(li)
        ulElement.appendChild(li)
    }
}

function changeTextBox(event){
    console.log(event.target)
    for(let i = 0;i<allNotes.length;i++){
        if(allNotes[i].title === event.target.textContent){
            notes.value = allNotes[i].body;
        }
    }
}