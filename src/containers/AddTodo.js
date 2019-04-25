import {connect} from 'react-redux'
import {addTodo} from '../actions/todoActions'
import AddTodo from "../components/AddTodo";

const mapDispatchToProps = (dispatch) => ({
    onClick: (text) => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(AddTodo)
