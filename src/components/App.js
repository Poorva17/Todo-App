import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Notification from "../containers/Notification";

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <Notification />
    </div>
)

export default App
