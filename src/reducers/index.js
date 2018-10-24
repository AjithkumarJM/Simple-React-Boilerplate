import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import testReducer from './sampleReducer';

const rootReducer = combineReducers({
  testReducer,
  form: formReducer
});

export default rootReducer;
