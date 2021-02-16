const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Artur'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Vika'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Goodbye'},
    ],
}

const messagesReducer = (state = initialState, action) => {
    let stateCopy

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageText
            return  {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})

export default messagesReducer;