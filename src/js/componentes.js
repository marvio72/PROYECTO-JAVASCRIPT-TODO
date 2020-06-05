import {Todo} from '../classes/';
import { todoList } from '..';

//Referencias en el HTML
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');
const contadorTodo  = document.querySelector('.todo-count');

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

export const pendientesTodo = (contador) => {
  const cuenta = contadorTodo.innerHTML = `<strong>${contador}</strong>  pendientes(s)`;
  return cuenta;
};

// Eventos
txtInput.addEventListener('keyup', ( event ) =>{
  
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    
    console.log(txtInput.value);
    const nuevoTodo = new Todo(txtInput.value);
    todoList.nuevoTodo(nuevoTodo);

    crearTodoHtml(nuevoTodo);

    pendientesTodo(todoList.contadorPendientes());

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

  pendientesTodo(todoList.contadorPendientes());
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

ulFiltros.addEventListener('click', ( event ) => {
  console.log(event.target.text); // Nos muestra el texto que contiene la etiqueta.
  const filtro = event.target.text;

  if (!filtro) {return;}

  anchorFiltros.forEach( elem => elem.classList.remove('selected'));
  event.target.classList.add('selected');

  for( const elemento of divTodoList.children){
    // console.log(elemento);
    elemento.classList.remove('hidden'); //La clase se declaro en el archivo de style.css
    const completado = elemento.classList.contains('completed');
    
    switch (filtro) {
      case 'Pendientes':
        if (completado) {
          elemento.classList.add('hidden')
        }
        break;

      case 'Completados':
        if (!completado) {
          elemento.classList.add('hidden')
        }
        break;
    }
  }
});