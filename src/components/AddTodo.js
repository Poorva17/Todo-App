import React from "react";
import TodoAppContext from "../context/TodoAppContext";

class AddTodo extends React.Component {
    static contextType = TodoAppContext

    constructor(props) {
        super(props)
        this.state = {input: ''}
    }

    render() {
        console.log('-------> AddTodo')
        return <form
            onSubmit={
                (e) => {
                    e.preventDefault()
                    this.context.addTodo(this.state.input)
                }
            }>
            <input
                onChange={this.updateInput}>
            </input>
            <button type="submit">Add Todo</button>
        </form>
    }

    updateInput = (e) => {
        this.setState({input: e.target.value})
    }

}
export default AddTodo
