let menuElem = document.querySelector('.menu');

menuElem.addEventListener('click', ({target}) =>{
  
    const searchClass = menuElem.querySelector('.close')
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
    
})


// document.getElementById('nav').onmouseover= function(event) {
//     var target = event.target; // где был клик?
//     if (target.className == 'menu-item') {
//         var s=target.getElementsByClassName('submenu');
//         closeMenu();
//         s[0].style.display='block';
//     }
// }
// document.onmousemove=function(event) {
//     var target = event.target; // где был клик?
//     console.log(event.target);
//     if (target.className!='menu-item' && target.className!='submenu') {
//         closeMenu();
//     }
// }
// function closeMenu(){
//     var menu=document.getElementById('nav');
//     var subm=document.getElementsByClassName('submenu');
//     for (var i=0; i<subm.length; i++) {
//         subm[i].style.display="none";
//     }
// }
