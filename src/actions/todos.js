import { ACTION_TYPES } from '../utils/constant';

const { ADD_TODO, DELETE_TODO } = ACTION_TYPES;

export const addTodo = (todo) => ({ type: ADD_TODO, todo });

export const deleteTodo = (todo) => ({ type: DELETE_TODO, todo });