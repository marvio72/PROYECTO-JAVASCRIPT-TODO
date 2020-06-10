import { Todo } from "./todo.class";

export class TodoList {

  constructor(){
    // this.todos = [];
    this.cargarLocalStorage();
 
  }

  nuevoTodo( todos ) {
    this.todos.push(todos);
    this.guardarLocalStorage();
  }

  eliminarTodo( id ) {
      this.todos = this.todos.filter(todo => todo.id != id );
      this.guardarLocalStorage();
  }

  marcarCompletado ( id ){
    let pendientes = 0;
    for( const todo of this.todos) {

      if( todo.id == id) {

        todo.completado = !todo.completado;
        this.guardarLocalStorage();
        break;

      }
    }
  }

  contadorPendientes ( ) {
 
    let contador = {
      "pendientes" : 0,
      "completados": 0,
      "todos"      : 0,
    };

    for(const todo of this.todos) {
      if (!todo.completado) {
        contador.pendientes++;
      } else {
        contador.completados++;
      }
    }
    contador.todos = contador.pendientes + contador.completados;
    return contador;
  }

  eliminarCompletados(){
    this.todos = this.todos.filter(todo => !todo.completado);
    this.guardarLocalStorage();
  }

  guardarLocalStorage(){
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }

  cargarLocalStorage(){
    
    this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];

    // this.todos = this.todos.map( obj => Todo.fromJason(obj)); 
    this.todos = this.todos.map( Todo.fromJason ); //Es lo mismo que el anterior                
  }
}