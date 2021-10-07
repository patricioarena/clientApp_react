
const dataInicial = 0
const typeIncremented = '@counter/Incremented'
const typeDecremented = '@counter/Decremented'
const typeReset = '@counter/Reset'

const counterReducer = (state = dataInicial, action) => {
    switch (action.type) {
        case typeIncremented:
            return state + 1;
        case typeDecremented:
            return state - 1;
        case typeReset:
            return dataInicial;
        default:
            return state;
    }
}

export const actionIncrement = () => (dispatch, getState) => {
    dispatch({
        type: typeIncremented,
    })
}

export const actionDecrement = () => (dispatch, getState) => {
    dispatch({
        type: typeDecremented,
    })
}

export const actionReset = () => (dispatch, getState) => {
    dispatch({
        type: typeReset,
    })
}


export default counterReducer;








// window.gapi.signin2.render('my-signIn', {
//     'scope': 'profile email',
//     'width': 250,
//     'height': 50,
//     'longtitle': false,
//     'theme': 'dark',
//     'onsuccess': onSuccess,
//     'onfailure': 'this.Onfailure'
//   })