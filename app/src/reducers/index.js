import { combineReducers } from 'redux'

const messages = (state = [], action) => {
    switch (action.type) {
        case 'POST_MESSAGE':
            return [...state, action.message]
        default:
            return state
    }
}

const reducers = combineReducers({
    messages
});

export default reducers
