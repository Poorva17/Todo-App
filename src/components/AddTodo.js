import React from "react";

class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {input: ''}
    }

    render() {
        return <form
            onSubmit={
                (e) => {
                    e.preventDefault()
                    this.props.onClick(this.state.input)
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
