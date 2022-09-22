import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import './Posts.css'

const Posts = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])
    return (
        <div>
            <h1 style={{ color: 'green' }}>All todos are Here</h1>
            <h3>Total todos: {todos.length}</h3>
            <div className='todos-container'>
                {
                    todos.map(todo => <Todo
                        todo={todo}
                        key={todo.id}
                    ></Todo>)
                }
            </div>
        </div>
    );
};

export default Posts;