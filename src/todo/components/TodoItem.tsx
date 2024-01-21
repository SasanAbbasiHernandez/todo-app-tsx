import React, { useContext } from 'react'
import { Todo } from '../interfaces/interfaces'
import { useTodos } from '../hooks/useTodos'
// import { TodoContext } from '../context/TodoContext'

interface props {
    todo: Todo
}

export const TodoItem = ( { todo } : props) => {

    // const { toogleTodo } = useContext(TodoContext)
    const { toogleTodo } = useTodos();

    const handleDbClick = () => {
        toogleTodo( todo.id );
    }

    return (
        <li style={{
            cursor: 'pointer',
            textDecoration: todo.completed ? 'line-through' : ''
        }} 
        onDoubleClick={handleDbClick}>
            {todo.desc}
        </li>
    )
}
