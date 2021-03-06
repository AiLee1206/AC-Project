// 初始變數
let list = document.querySelector('#my-todo')
let addBtn = document.querySelector('#addBtn')
let input = document.querySelector('#newTodo')

// 資料
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}


// 函式
function addItem(text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `

  if (`${text}.value` != `${text}.value`) {
    list.remove();
  }
  list.appendChild(newItem)
}


// write your code here
addBtn.addEventListener('click', function () {
  let inputValue = input.value;

  if (inputValue.length > 0) {
    addItem(inputValue)
  }
})

// delete
list.addEventListener('click', (event) => {
  let target = event.target;

  if (target.classList.contains('delete')) {
    let parentElement = target.parentElement;
    parentElement.remove();
  } else if (target.tagName === 'LABEL') {
    target.classList.toggle('checked')
  }
})

var ua = navigator.userAgent;

if (ua.indexOf('Firefox') !== -1) {
  // run Firefox-specific code
} else if (ua.indexOf('Chrome') !== -1) {
  // run Chrome-specific code
}
