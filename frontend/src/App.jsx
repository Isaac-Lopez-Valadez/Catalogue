import React, { Fragment, useState, useRef, useEffect } from "react";
import { TodoList } from "./components/TodoList";
import {v4 as uuidv4} from 'uuid';
import {helpHttp} from ""

const KEY = "todoApp.todos";

export function App(){
    const [todos, setTodos] = useState([
        {id:1, task:"Tarea 6", completed:false},
        {id:2, task:"Tarea 8", completed:true}
    ]);
    const todoTaskRef = useRef();

    useEffect(()=>{
        const todoTaskRef = JSON.parse(localStorage.getItem(KEY));
        if(todoTaskRef){
            setTodos(todoTaskRef);
        }
    },[]);
    useEffect(()=>{
        localStorage.setItem(KEY, JSON.stringify(todos));
    },[todos]);

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if(task==='') return;

        setTodos(prevTodos=>{
            return [...prevTodos, { id: uuidv4(), task: task, completed:false }];
        });
        todoTaskRef.current.value = "";
    };
    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }
    const handlerClearAll = () => {
        const newTodos = todos.filter(todo => !todo.completed);
        setTodos(newTodos);
    } 
    const extraAPI = ()=>{
        let connectAPI = `http://localhost:8080/feed/posts`;
        console.log(connectAPI);

        const apiRest = helpHttp().get(connectAPI);
    }

    return (
        <Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <input ref={todoTaskRef} type="text" name="name" id="name" placeholder="Nombre aqui"/>
            <button onClick={handleTodoAdd}>+</button>
            <button onClick={handlerClearAll}>-</button>
            <button onClick={extraAPI}>API</button>
            <div>Te quendan {todos.filter(todo => !todo.completed).length} tareas por terminar</div>
        </Fragment>
    );
}