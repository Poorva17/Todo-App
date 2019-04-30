import {connect} from 'react-redux'
import {addTodo, sendNotification} from '../actions/todoActions'
import AddTodo from "../components/AddTodo";

const mapDispatchToProps = (dispatch) => ({
    onClick: (text) => {
        dispatch(addTodo(text))
        dispatch(sendNotification("Todo Added"))
    }
})

export default connect(null, mapDispatchToProps)(AddTodo)
