import { DECREMENT_TEST_NUM, INCREMENT_TEST_NUM } from './types';

export interface Action {
  type: string;
  payload: number;
}

export const incrementTestNum = (increment: number): Action => {
  return {
    type: INCREMENT_TEST_NUM,
    payload: increment,
  };
};

export const decrementTestNum = (decrement: number): Action => {
  return {
    type: DECREMENT_TEST_NUM,
    payload: decrement,
  };
};
