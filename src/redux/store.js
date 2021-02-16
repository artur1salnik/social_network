import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 10},
                {id: 2, message: 'It\'s my first post', likes: 15},
            ],
            newPostText: 'Hello',
        },
        messagesPage: {
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
            newMessageText: '',
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    _addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likes: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store;
window.store = store;