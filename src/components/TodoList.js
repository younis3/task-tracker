import React from 'react'

const TodoList = ({toDoList}) => {
    return (
        <div>
            {toDoList.map(item => (
                <h1>{item.text}</h1>
            ))}
        </div>
    )
}

export default TodoList
