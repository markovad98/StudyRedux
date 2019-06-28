import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions.js'

const Dec = ({dec}) => {
    return (
        <button onClick={dec} className="btn btn-primary btn-lg">-</button>
    )
}

const mapStateToProps = () => {}


export default connect(mapStateToProps, actions)(Dec)