const darkButton = document.querySelector('button#darkThemeButton');
darkButton.addEventListener('click', darkTheme)

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

