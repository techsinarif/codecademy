import { combineReducers } from 'redux';
import user from './user';

const rootReducers = combineReducers({
  users: user,
});

export default rootReducers;