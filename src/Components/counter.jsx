import React from 'react'
import { connect } from 'react-redux'

const Counter = ({counter}) => {
    return (
        <h2>{counter}</h2>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps)(Counter)