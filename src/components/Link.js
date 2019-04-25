import React from 'react'
import PropTypes from 'prop-types'
import TodoAppContext from '../context/TodoAppContext'

const Link = (props) => (
    <TodoAppContext.Consumer>
        {
            (context) => {
                console.log('-------> Link')
                return <button
                    onClick={() => context.setVisibilityFilter(props.filter)}
                    disabled={props.filter === context.visibilityFilter}
                    style={{
                        marginLeft: '4px'
                    }}
                >
                    {props.children}
                </button>}
        }

    </TodoAppContext.Consumer>
)

Link.propTypes = {
    filter: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Link
