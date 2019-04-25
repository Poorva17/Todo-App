import React from 'react'
import Footer from './Footer'
import AddTodo from '../components/AddTodo'
import VisibleTodoList from '../components/TodoList'
import TodoContextProvider from './TodoContextProvider'

const App = () => (
    <div>
        <TodoContextProvider>
            <AddTodo/>
            <VisibleTodoList/>
            <Footer/>
        </TodoContextProvider>
    </div>
)

export default App
