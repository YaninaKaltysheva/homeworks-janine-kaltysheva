
// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый
// элемент родителем для второго:
//     isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));

// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark

function isParent (parent, child){
    if (child.parentElement === parent){
        return child.parentElement === parent;}
};
console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));
//2. Получить список всех ссылок, которые не находятся внутри списка ul
const linkNotFromUl =  Array.from(document.querySelectorAll('body a')).filter(link => !link.closest('ul'));
console.log(linkNotFromUl)
// 3. Найти элемент, который находится перед и после списка ul
const newElement = () => {
    console.log(document.querySelector('ul').previousElementSibling);
    console.log(document.querySelector('ul').nextElementSibling);
    return newElement;
}
newElement()
//4. Посчитать количество элементов li в списке
const countElement = () => {
    console.log(document.querySelectorAll('ul li').length);
    return countElement;
}
countElement()
