const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id:1, name:'Денис'},
        {id:2, name:'Лев'},
        {id:3, name:'Саша'},
        {id:4, name:'Света'},
        {id:5, name:'Дима'}
    ],
    messages: [
        {id:1, message:'Привет'},
        {id:2, message:'Как дела'},
    ]
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id:3, message: body}]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;