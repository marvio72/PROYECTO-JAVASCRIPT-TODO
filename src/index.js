import './sass/estilos.scss';
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo) );
// todoList.todos.forEach( crearTodoHtml ); //Es lo mismo que lo anterior

// const tarea = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(tarea);

// tarea.completado = false;


// console.log( todoList );

// crearTodoHtml(tarea);

// localStorage.setItem('my-key', 'abc123');
// sessionStorage.setItem('my-key', 'abc123');

// setTimeout(() => {
//   localStorage.removeItem('my-key');
// }, 1500);