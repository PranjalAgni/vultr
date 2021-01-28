import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from '../reducers';

const reduxConfigureStore = () => {
  const middlewareEnhancers = applyMiddleware(logger);
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
    enhancers: [middlewareEnhancers],
  });

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;

export default reduxConfigureStore;
