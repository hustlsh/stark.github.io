import { ACTION_TYPES } from '../utils/constant';

const { INCREMENT, DECREMENT } = ACTION_TYPES;

export const increment = () => ({ type: INCREMENT });

export const decrement = () => ({ type: DECREMENT });