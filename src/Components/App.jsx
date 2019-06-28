import React, { Component } from 'react'
/* Импортируем Элементы */
import Dec from './dec.jsx'
import Inc from './inc.jsx'
import Mul from './mul.jsx'
import Counter from './counter.jsx'

export default class App extends Component {
    render() {
        return (
        <>
            <Inc />
            <Dec />
            <Mul />
            <Counter />
        </>
        )
    }
}