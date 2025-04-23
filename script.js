const todoList=[];
function renderTodoList(){
  let todoList1='';
  todoList.forEach((todoObject,index) => {
    const{name,dueDate}=todoObject;
    todoList1+=`<div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-button">Delete</button>`;
  });
  document.querySelector('.js-todo-list').innerHTML=todoList1;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton,index)=>{
     deleteButton.addEventListener('click',()=>{
      todoList.splice(index,1); 
      renderTodoList();
     })
  });
}
//add button
document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
  addTodo();
});
function addTodo(){
  const inputElement=document.querySelector('.js-input-name');
  const dateElement=document.querySelector('.js-due-date-input');
  const name=inputElement.value;
  const dueDate=dateElement.value;
  todoList.push({name,dueDate});
  inputElement.value='';
  dateElement.value='';
  renderTodoList();
}
