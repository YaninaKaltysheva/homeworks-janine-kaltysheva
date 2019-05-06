debugger
let menu = document.querySelector('.menu');

menu.addEventListener('click', ({target}) =>{
    const divWithNone = document.querySelector('.d-none')
            if (divWithNone) {
                    divWithNone.classList.remove('d-none')
            }
    const searchClass = menu.querySelector('.close')
    if (searchClass){
        searchClass.classList.remove('close')
        searchClass.classList.add('d-none')
    }
    const li = target.tagName === 'LI' ? target : target.closest('li')
    const divLi = li.querySelector('.dropdown-menu')
    if(divLi){
        divLi.classList.add('close')
        divLi.classList.remove('d-none')
    }else{
       alert('Здесь нет меню')
    }
    console.log(target)
})