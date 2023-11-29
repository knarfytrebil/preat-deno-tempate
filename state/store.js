// https://stackoverflow.com/questions/68477868/why-i-can-not-use-import-createslice-configurestore-from-reduxjs-toolki
import * as toolkitRaw from '@reduxjs/toolkit';
const { configureStore } = toolkitRaw.default ?? toolkitRaw;

import CounterReducer from '../reducers/counter.js';

export default configureStore({
  reducer: {
    counter: CounterReducer
  }
})