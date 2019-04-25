import React from 'react'
import Footer from './Footer'
import AddTodo from '../components/AddTodo'
import VisibleTodoList from '../components/TodoList'
import TodoAppContext from '../context/TodoAppContext'
import {VisibilityFilters} from "../constants/visibilityFilters";


class App extends React.Component {
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
        return (
            <div>
                <TodoAppContext.Provider value={
                    {
                        todos: this.state.todos,
                        visibilityFilter: this.state.visibilityFilter,
                        addTodo: this.addTodo,
                        toggleTodo: this.toggleTodo,
                        setVisibilityFilter: this.setVisibilityFilter
                    }
                }>
                    <AddTodo/>
                    <VisibleTodoList/>
                    <Footer/>
                </TodoAppContext.Provider>
            </div>
        )
    }

}


export default App
