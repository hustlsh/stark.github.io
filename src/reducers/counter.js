import { ACTION_TYPES } from '../utils/constant';

const { INCREMENT, DECREMENT } = ACTION_TYPES;

export default (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}