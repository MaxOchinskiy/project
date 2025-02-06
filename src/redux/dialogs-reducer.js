const updateNewMessageBody = 'updateNewMessageBody';
const sendMessage= 'sendMessage';
let initialState = {
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'hi'},
        {id: 3, message: 'popo'},
        {id: 4, message: 'mau'},
        {id: 5, message: 'mya'},
        {id: 6, message: 'Iriska top'},
    ],
    dialogData: [
        {id: 1, name: 'Max'},
        {id: 2, name: 'Axinia'},
        {id: 3, name: 'Pavel'},
        {id: 4, name: 'Gena'},
        {id: 5, name: 'Masy'},
        {id: 6, name: 'Iriska'}
    ],
    newMessageBody:""
};
const dialogsReducer = (state=initialState, action) => {
    switch(action.type) {
        case updateNewMessageBody:
            return {
                ...state,
                newMessageBody:action.body
            };
            case sendMessage:
            let body = state.newMessageBody;
            return{
                ...state,
                newMessageBody:'',
                messagesData: [...state.messagesData,{id: 6, message: body}]
            };
            default:
            return state;

    }

}
export const sendMessageCreator =()=>({type: sendMessage})
export const updateNewMessageBodyCreator =(body)=>(
    {type: updateNewMessageBody,body:body})


export default dialogsReducer;