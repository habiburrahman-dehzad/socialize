import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { State } from './interfaces/State';
import rootReducer from './reducers/rootReducer';

const middleware: any[] = [];

const createStore = (initialState?: State) => {
  if (!initialState) {
    initialState = {
      test: {
        testNum: 20,
      },
    };
  }
  return reduxCreateStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
};

export default createStore;
