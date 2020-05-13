import './sass/estilos.scss';
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript');


todoList.nuevoTodo(tarea);

tarea.completado = false;


console.log( todoList );

crearTodoHtml(tarea);