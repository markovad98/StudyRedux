import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions.js'

const Mul = ({mul}) => {
    return (
        <button onClick={mul} className="btn btn-primary btn-lg">*</button>
    )
}

const mapStateToProps = () => {}


export default connect(mapStateToProps, actions)(Mul)