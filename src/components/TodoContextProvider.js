import React, {useState} from 'react'
import TodoAppContext from '../context/TodoAppContext'
import {VisibilityFilters} from "../constants/visibilityFilters";

const TodoContextProvider = (props) => {
    const [todos, setTodos] = useState([])
    const [visibilityFilter, setVisibilityFilter] = useState(VisibilityFilters.SHOW_ALL)

    const addTodo = (text) => {
        setTodos([
            ...todos,
            {
                id: todos.length,
                text: text,
                completed: false
            }])
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ))
    };

    const setFilter = (filter) => {
        setVisibilityFilter(filter)
    }

    return (
        <TodoAppContext.Provider value={
            {
                todos,
                visibilityFilter,
                addTodo,
                toggleTodo,
                setVisibilityFilter: setFilter
            }
        }>
            {props.children}
        </TodoAppContext.Provider>
    )

}

export default TodoContextProvider


