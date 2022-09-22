import React from 'react';
import './Todo.css'

const Todo = (props) => {
    // console.log(props.todo)
    const { userId, title, completed } = props.todo;
    return (
        <div className='todo'>
            <h2>User Id: {userId}</h2>
            <h3>Title: {title}</h3>
            <h5>Completed: {!!completed ? 'True' : 'False'}</h5>
        </div>
    );
};

export default Todo;