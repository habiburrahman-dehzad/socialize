import { Action } from '../actions/testActions';
import { DECREMENT_TEST_NUM, INCREMENT_TEST_NUM } from '../actions/types';
import { TestState } from '../interfaces/State';

const initialState: TestState = {
  testNum: 20,
};

const testReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT_TEST_NUM:
      return {
        ...state,
        testNum: state.testNum + payload,
      };
    case DECREMENT_TEST_NUM:
      return {
        ...state,
        testNum: state.testNum - payload,
      };
    default:
      return state;
  }
};

export default testReducer;
