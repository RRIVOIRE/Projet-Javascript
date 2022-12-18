const loader= document.querySelector('.loader');

const hideLoader= document.querySelector('.hideLoader')

window.addEventListener('load', () => {


    loader.classList.add('fondu-out')
    setTimeout(hideLoader, 1000);

})


const switchThemeBtn = document.querySelector('.changeTheme')

let toggleThème=0

switchThemeBtn.addEventListener('click',  () => {
    if(toggleThème===0) {

        document.documentElement.style.setProperty('--ecriture', '#ffffff'); 
        document.documentElement.style.setProperty('--background', '#000000'); 
        toggleThème++;
    }  else {
        
        document.documentElement.style.setProperty('--ecriture', '#ffffff'); 
        document.documentElement.style.setProperty('--background', '#192428'); 
        toggleThème--;  

    }


})  