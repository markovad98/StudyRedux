// Импортируем createStore для создания стора
import { createStore } from 'redux'
// Импортируем самостоятельно созданный Reducer
import { Reducer } from './reducer'
// Для оборачивания всего приложения
import { Provider } from 'react-redux'
// React
import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/app.jsx'

// Создали глобальный стор - store, который мы даем приложению
const store = createStore(Reducer)


    ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))









