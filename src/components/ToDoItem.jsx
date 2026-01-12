import { useState } from "react";

function ToDoItem({todo, deleteTodo, toggleTodo, editTodo}){
    const[isEditing, setIsEditing] = useState(false);
    const[editText, setEditText] = useState(todo.text);

    const handleEdit =() =>{
        editTodo(todo.id,editText);
        setIsEditing(false);
    }

    
    return(
        <div className="todo-items">
            <input type="checkbox" checked={ToDoItem.completed} onChange={()=> toggleTodo(todo.id)} />
            { isEditing ? (
                <input value ={editText} onChange={(e) => setEditText(e.target.value)} />
            ) :(
                <span className={todo.completed ? "completed" : ""}>
                    {todo.text}
                </span>
            )}

             { isEditing ? (
                <button on onClick={handleEdit}>Save</button>
            ) :(
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    );
}

export default ToDoItem;