
export class TodoList {

  constructor(){
    this.todos = [];
  }

  nuevoTodo( todos ) {
    this.todos.push(todos);
  }

  eliminarTodo( id ) {
      this.todos = this.todos.filter(todo => todo.id != id );
  }

  marcarCompletado ( id ){
    for( const todo of this.todos) {
      // console.log(id, todo.id);

      if( todo.id == id) {

        todo.completado = !todo.completado;
        break;

      }
    }
  }

  eliminarCompletados(){

  }
}