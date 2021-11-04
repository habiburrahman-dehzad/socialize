import { combineReducers } from 'redux';
import testRecuder from './testReducer';

const rootReducer = combineReducers({
  test: testRecuder,
});

export default rootReducer;
