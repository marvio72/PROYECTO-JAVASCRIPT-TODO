import {Todo} from '../classes/';
import { todoList } from '..';

//Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');

export const crearTodoHtml = (todo) => {

  const htmlTodo = `
  <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
		<div class="view">
      <input class="toggle" type="checkbox" ${(todo.completado) ? "checked" : ''}>
      <label>${todo.tarea}</label>
      <button class="destroy"></button>
    </div>
		<input class="edit" value="Create a TodoMVC template">
    </li>`;
  
  const div = document.createElement('div');
  div.innerHTML = htmlTodo;

  divTodoList.append( div.firstElementChild );

  return div.firstElementChild;
};


// Eventos
txtInput.addEventListener('keyup', ( event ) =>{
  
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    
    console.log(txtInput.value);
    const nuevoTodo = new Todo(txtInput.value);
    todoList.nuevoTodo(nuevoTodo);

    crearTodoHtml(nuevoTodo);

    txtInput.value = '';

  }
});

divTodoList.addEventListener('click', (event) => {
  
  const nombreElemento = event.target.localName; // label, input, button
  const todoElemento = event.target.parentElement.parentElement;
  const todoId = todoElemento.getAttribute('data-id');

  if ( nombreElemento.includes('input')){ //click en el check
    todoList.marcarCompletado( todoId );
    todoElemento.classList.toggle('completed');
  } else if( nombreElemento.includes('button')){ //click en el boton
    todoList.eliminarTodo(todoId);
    divTodoList.removeChild( todoElemento );
  }

  // console.log(todoList);

});


btnBorrar.addEventListener('click', () => {
  todoList.eliminarCompletados();

  for ( let i = divTodoList.children.length-1; i >= 0; i--){

    const elemento = divTodoList.children[i];

    if (elemento.classList.contains('completed')) {
      divTodoList.removeChild(elemento);
    }
  }
});

