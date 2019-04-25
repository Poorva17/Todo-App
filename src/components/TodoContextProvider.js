import React from 'react'
import TodoAppContext from '../context/TodoAppContext'
import {VisibilityFilters} from "../constants/visibilityFilters";

class TodoContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            visibilityFilter: VisibilityFilters.SHOW_ALL
        }
    }

    addTodo = (text) => {
        this.setState({
            todos: [...this.state.todos, {
                id: this.state.todos.length,
                text: text,
                completed: false
            }]
        })
    };

    toggleTodo = (id) => {
        this.setState({
            todos: this.state.todos.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        })
    };

    setVisibilityFilter = (filter) => {
        this.setState({
            visibilityFilter: filter
        })
    }

    render() {
        return <TodoAppContext.Provider value={
            {
                todos: this.state.todos,
                visibilityFilter: this.state.visibilityFilter,
                addTodo: this.addTodo,
                toggleTodo: this.toggleTodo,
                setVisibilityFilter: this.setVisibilityFilter
            }
        }>
            {this.props.children}
        </TodoAppContext.Provider>
    }
}

export default TodoContextProvider


