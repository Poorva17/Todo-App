const notification = (state = "", action) => {
    switch (action.type) {
        case 'SEND_NOTIFICATION':
            return action.notification
        default:
            return state
    }
};

export default notification
