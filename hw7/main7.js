 //1. Найти параграф и получить его текстовое содержимое (только текст!)

var paragraph = document.querySelector('p');
console.log(paragraph.textContent);

//2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию
 //(в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

 const infoObject = (elem) => {
     const myElem = document.querySelector(elem);
     const typeMyElem = myElem.nodeType;
     const nameMyElem = myElem.nodeName;
     const childMyElem = myElem.children.length;
     const properMyElem ={
         type: typeMyElem,
         name: nameMyElem,
         child: childMyElem
     };
     return properMyElem
 };
 console.log(infoObject('div'));
 //3. Получить массив, который состоит из текстового содержимого ссылок внутри списка:
     //getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]


 let ul = document.querySelector("ul");
 let result = [];

 function getTextFromUl(list) {
     let a = list.querySelectorAll("li a");
     for (let i = 0; i < a.length; i++) {
         let element = a[i];
         result.push(element.textContent);
     }
     return result;
 }

 console.log(getTextFromUl(ul));

 //4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны
 //остаться). Конечный результат:
 //-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text


 const newChild = document.querySelector('p').childNodes

     for (let i = 0; i < newChild.length; i++) {
        if (newChild[i].nodeType = 3) {
            newChild[i].textContent = '-text-';
            newChild.innerHTML;
        }
 }
 console.log(newChild)

 //Найти в коде список ul и добавить класс “list”
 let ulClass = document.getElementsByTagName('ul')['0'];
 ulClass.classList.add("list");
 console.log(ulClass);

 //Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
 let aElem = document.querySelector('ul a');
 aElem.id = 'link';
 console.log(aElem);

 //3. На li через один (начиная с самого первого) установить класс “item”
 let allLi = document.getElementsByTagName('li');

 for (let i = 0; i < allLi.length; i+=2){
     allLi[i].classList.add('item');
 }
 let liClass = document.getElementsByClassName('item');
 console.log(liClass);

 // ЗАДАЧА №4 : На все ссылки в примере установить класс “custom-link”
 const getElementAllLinks = document.querySelectorAll('a');
 for (let index = 0; index < getElementAllLinks.length; index++) {
     getElementAllLinks[index].classList.add('custom-link');}
 console.log(getElementAllLinks)
//1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ +
  //   номер li:
    // <ul>
//<li><a href="#">Link1</a></li>
// ...
 // <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
const fragment = document.createDocumentFragment(),
    newsul = document.querySelector('ul'),
    numbChildrenUl = newsul.children.length;

for (let index = 1; index <= 2; index++) {
    const newLi = document.createElement('li')
    newLi.classList.add('new-item')
    fragment.appendChild(newLi)
    newLi.textContent = `link ${numbChildrenUl + index}`
}
newsul.appendChild(fragment)
console.log(newsul)

// ЗАДАЧА №2 : В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong).
const linksAll = document.links;
for (let link of linksAll) {
    if (link.parentNode.tagName === 'LI') {
        const strong = document.createElement('strong');
        link.insertAdjacentElement('afterbegin', strong);
    }
}


//3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте
//сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод
//createElement.
const body = document.body;
const img = document.createElement('img');
img.setAttribute('src', 'https://cdn.pixabay.com/photo/2019/04/06/20/56/spring-4108380_960_720.jpg');
body.insertAdjacentElement('afterbegin', img);

//4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент
//установить класс green

const mark = document.querySelector('mark');
mark.insertAdjacentText('beforeend', 'green');
mark.classList.add('green');

//5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
let allLiArray = Array.from(document.querySelectorAll('li'));

let reverseSortedLi = allLiArray.sort((prev, next) => -1);

for (let index = 0; index < reverseSortedLi.length; index++) {
    newsul.appendChild(reverseSortedLi[index])
}

