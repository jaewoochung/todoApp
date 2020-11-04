const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

/*
 * Add a new item listed with an unchecked checkbox initialized
*/
function newTodo() {
  const todoText = prompt("Enter todo")

  // Initialize elements
  let li = document.createElement('li')
  addStyle(classNames.TODO_ITEM, li)
  let span = document.createElement('span')
  addStyle(classNames.TODO_TEXT, span)
  const checkBox = document.createElement('input')
  checkBox.setAttribute('type', 'checkbox')
  addStyle(classNames.TODO_CHECKBOX, checkBox)

  // Initalize delete functionality
  let button = document.createElement('button')
  addStyle(classNames.TODO_DELETE, button)
  button.textContent = 'Delete'

  if (todoText.length > 0) {
      li.appendChild(document.createTextNode(' ' + todoText));
  } else {
      alert("Can't add empty value to list!")
      return false
  }
  // Add to HTML
  list.appendChild(li);
  li.appendChild(span);
  li.appendChild(checkBox)
  let checkedItems = li.lastChild    // Selecting checkbox

  li.appendChild(button)
  let buttonItems = li.lastChild

  buttonItems.addEventListener('click', function(e) {
      deleteButton(buttonItems)
  });

  // count todos in list
  checkedCount(itemCountSpan)
  uncheckedCount(uncheckedCountSpan)


  checkedItems.addEventListener('click', function(e) {
      if (e.target.checked) {
          let count = uncheckedCountSpan.innerHTML
          count--;
          uncheckedCountSpan.innerHTML = count.toString();
      } else if (!e.target.checked) {
          let count = uncheckedCountSpan.innerHTML
          count++;
          uncheckedCountSpan.innerHTML = count.toString()
      }
  });
}

function deleteButton(element) {
    let itemCheck = element.parentElement.childNodes//.getElementsByClassName("todo-checkBox")
    let count = uncheckedCountSpan.innerHTML

    if (itemCheck[2].checked) {
        // no need to decrement count
    } else {
        // need to decrement uncheckedCountSpan
        count--
    }
    uncheckedCountSpan.innerHTML = count.toString();

    let itemCount = itemCountSpan.innerHTML
    itemCount--
    itemCountSpan.innerHTML = itemCount.toString()

    // remove the task
    element.parentElement.remove()
}

function checkedCount(value) {
  let count = +value.innerHTML
  count++;
  itemCountSpan.innerHTML = count;
}

function uncheckedCount(value) {
    let count = value.innerHTML
    count++;
    uncheckedCountSpan.innerHTML = count;
}

function addStyle(selector, property) {
  property.setAttribute('class', selector);
}
