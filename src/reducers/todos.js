import { ACTION_TYPES } from '../utils/constant';

const { ADD_TODO, DELETE_TODO } = ACTION_TYPES;

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.todo]
        case DELETE_TODO:
            return state.filter(todo => todo !== action.todo);
        default:
            return state;
    }
}