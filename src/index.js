import './sass/estilos.scss';
import {Todo, TodoList} from './classes';
import { crearTodoHtml, pendientesTodo } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo) );

// const newTodo = new Todo("Aprender JavaScript");
// // todoList.nuevoTodo(newTodo);

// newTodo.imprimirClase();

console.log('todos', todoList.todos);

pendientesTodo(todoList.contadorPendientes());
