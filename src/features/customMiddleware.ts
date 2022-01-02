
import { Middleware } from '@reduxjs/toolkit';
import { incrementAsync } from './counter/counterSlice';

const customMiddleware: Middleware = store => {
 
  return next => action => { 
    store.dispatch(incrementAsync(1)) 
    next(action);
  }
}
 
export default customMiddleware;