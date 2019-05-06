//1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в
// атрибуте data-text у кнопки.
const btnMessageOnClick = document.getElementById('btn-msg');
btnMessageOnClick.addEventListener('click', () => console.log(btnMessageOnClick.dataset.text));

// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши
// покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.
const btnMessageMouseover = document.getElementById('btn-msg');
btnMessageMouseover.addEventListener("mouseover", ({target}) => {
    btnMessageMouseover.classList.add('red')
});
btnMessageMouseover.addEventListener("mouseout", ({target}) => {
    btnMessageMouseover.classList.remove('red')
});

// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
const bodyElements = document.body;
const ElemStrongTag = document.getElementById('tag');
bodyElements.addEventListener("click", function ({target}) { 
    ElemStrongTag.innerHTML = ''
    });
bodyElements.addEventListener("click", function ({target}) { 
const newElem = ElemStrongTag.innerHTML += target.tagName
});

// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item +
// порядковый номер Li по списку, т.е Item 3, Item 4 и т.д
const btnGenerateClick = document.getElementById('btn-generate');
const newsul = document.querySelector('ul');
btnGenerateClick.addEventListener('click', function(){
    numbChildrenUl = newsul.children.length;
    const newLi = document.createElement('li')
    newLi.textContent = `item ${numbChildrenUl + 1}`
    newsul.appendChild(newLi)
})
