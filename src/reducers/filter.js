import { ACTION_TYPES } from '../utils/constant'

const {FILTER_CHANGE} = ACTION_TYPES;

export default (state = '', action)=>{
    switch (action.type) {
        case FILTER_CHANGE:
            return action.filter;
        default:
            return state;
    }
}
