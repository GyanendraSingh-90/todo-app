import ToDoItem from "./ToDoItem";

function ToDoList({ todos, deleteTodo, toggleTodo, editTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}   // unique key
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default ToDoList;
