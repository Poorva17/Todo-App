import React, {useContext} from 'react'
import Todo from './Todo'
import TodoAppContext from '../context/TodoAppContext'
import {VisibilityFilters} from "../constants/visibilityFilters";

const TodoList = () => {
    const context = useContext(TodoAppContext)

    return <ul>
        {
            getVisibleTodos(context.todos, context.visibilityFilter).map(todo => (
                <Todo key={todo.id} {...todo} onClick={() => context.toggleTodo(todo.id)}/>
            ))
        }
    </ul>
}

const getVisibleTodos = (todos, filter) => {
    console.log(`getVisibleTodos ${filter}`)
    switch (filter) {
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            return todos
    }
}

export default TodoList
