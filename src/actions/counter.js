import { ACTION_TYPES } from '../utils/constant';

const { INCREMENT, DECREMENT } = ACTION_TYPES;

export const increment = () => dispatch =>dispatch({ type: INCREMENT });

export const decrement = () => (Promise.resolve({ type: DECREMENT, delay:2000 }));