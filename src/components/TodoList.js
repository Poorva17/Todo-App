import React from 'react'
import Todo from './Todo'
import TodoAppContext from '../context/TodoAppContext'
import {VisibilityFilters} from "../constants/visibilityFilters";

const TodoList = () => (
    <TodoAppContext.Consumer>
        {(context) => {
            console.log('-------> TodoList')
            const todoToShow = getVisibleTodos(context.todos, context.visibilityFilter)
            return <ul>
                {todoToShow.map(todo => (
                    <Todo key={todo.id} {...todo} onClick={() => context.toggleTodo(todo.id)}/>
                ))}
            </ul>
        }
        }
    </TodoAppContext.Consumer>


)

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
