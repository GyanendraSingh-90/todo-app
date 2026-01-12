import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./index.css";
function App(){
    const[todos, setTodos]= useState([]);

    // Add ToDo
    const addTodo =(text) =>{
        setTodos([...todos, 
            {id: Date.now(), text, completed: false}
        ]);
    }
    

    // Delete Todo
    const deleteTodo =(id) =>{
        setTodos(todos.filter(todo => todo.id !==id));
    }

    // Toggle Complete
    const toggleTodo =(id) =>{
        setTodos(
            todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
        )
    }


    //Edit Todo
    const editTodo =(id, newText) =>{
        setTodos(
            todos.map(todo => todo.id === id ? {...todo, text: newText} : todo)
        )
    }
    return(
        <div className="app">
            <Header addTodo={addTodo} />
            <ToDoList 
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            />            
        </div>
    )
}
export default App;