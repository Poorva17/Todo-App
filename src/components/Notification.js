import React from 'react'

const Notification = (props) => {
    console.log('----------> Notification')
    return <div>
        {props.notification}
        <button onClick={() => props.sendNotification("")}>Hide Notification</button>
    </div>
}

export default Notification
