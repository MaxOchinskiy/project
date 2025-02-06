import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store= {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi,how are you?'},
                {id: 2, message: 'It`s my post!'},
                {id: 3, message: 'Yoooooooo'},
            ],
            newPostText: 'vk.com'
        },
        messagesPage: {
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

        },
        sidebar:{}
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer


    },
    dispatch(action){
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.messagesPage=dialogsReducer(this._state.messagesPage,action);
        this._state.sidebar=sidebarReducer(this._state.sidebar,action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
