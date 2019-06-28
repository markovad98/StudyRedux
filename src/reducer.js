// Создаем функцию - обработчик событий (диспатчеров) которая в зависимости от них - меняет состояние стора
// Принимает 2 параметра - нынешнее состояние главного хранилища и объект {type: 'тип действия', payload: доп.инфа}
const Reducer = (state = 0, action) => {
    switch(action.type) {
        case 'MUL':
            return state * action.payload
        case 'DEC':
            return state - 1
        case 'INC':
            return state + 1

            default:
                return state
    }
}

export { Reducer }