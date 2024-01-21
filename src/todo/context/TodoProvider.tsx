import { useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./TodoReducer";

const INITIAL_STATE: TodoState  = {
    todoCount: 2,
    todos:[
        {
            id: '1',
            desc: "Recolectar piedras",
            completed: false
        },
        {
            id: '2',
            desc: "Decir Hola",
            completed: false
        }
    ],
    completed: 2,
    pending: 0
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props) => {

    const [ todoState, dispatch ] = useReducer(todoReducer, INITIAL_STATE);

    const toogleTodo = (id: string) => {
        dispatch({ type: 'toogleTodo', payload: {id} })
    }

    return (
        <TodoContext.Provider value={{ 
            todoState,
            toogleTodo
        }}>
            { children }
        </TodoContext.Provider>
    )
}
