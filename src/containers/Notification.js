import {sendNotification} from "../actions/todoActions"
import { connect } from 'react-redux'
import Notification from "../components/Notification"

const mapStateToProps = state => ({
    notification:  state.notification
})

const mapDispatchToProps = dispatch => ({
    sendNotification: text => dispatch(sendNotification(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
