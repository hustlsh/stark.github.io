import { ACTION_TYPES } from '../utils/constant';

const { FILTER_CHANGE } = ACTION_TYPES;

export const filterChange = (filter) => ({ type: FILTER_CHANGE, filter });