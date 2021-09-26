import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage:{
            posts: [
                {id:1, message:'Кто со мной в доту?', likesCount:5},
                {id:2, message:'Пишу соц сеть кактус!', likesCount:25},
            ],
            newPostText: ''
        },
        messagesPage:{
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
            ],
            newMessageBody: ''
        },
        sidebar:{

        }
    },
    _callSubsriber() { },
    getState(){
        return this._state;
    },
    subsribe(obsever) {
        this._callSubsriber = obsever;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubsriber(this._state);

    }

}

export default store;