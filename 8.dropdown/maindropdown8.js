const dropDownMenu = document.querySelector('.menu');
dropDownMenu.addEventListener('click', ({target}) => {
        const divWithNone = document.querySelector('.d-none')
        if (divWithNone) {
                divWithNone.classList.remove('d-none')
        }
        const divDropDown = target.classList.contains('dropdown-menu') ? target : target.closest('.dropdown-menu')
        if (divDropDown) {
       const divDropDown = document.querySelector('.dropdown-menu')
        divDropDown.classList.add('d-none')
        }
        console.log(target)
//       // console.log(divDropDown)
});



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