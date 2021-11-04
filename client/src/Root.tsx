import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import { State } from './store/interfaces/State';

interface Props {
  children: JSX.Element;
  initialState?: State;
}

const Root = ({ children, initialState }: Props) => {
  const store = createStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
