import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions.js'

const Inc = ({inc}) => {
    return (
        <button onClick={inc} className="btn btn-primary btn-lg">+</button>
    )
}

const mapStateToProps = () => {}



export default connect(mapStateToProps, actions)(Inc)