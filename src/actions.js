// ActionCreators - функции которые возвращают объект action - чтобы не допускать опечатку в строках
const inc = () => ({type: 'INC'})
const dec = () => ({type: 'DEC'}) 
const mul = () => ({ type: 'MUL', payload: Math.round(Math.random() * 3) })

export {
    inc,
    dec,
    mul,
}