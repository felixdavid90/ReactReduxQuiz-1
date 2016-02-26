import quizz from './quizz';
import results from './results';
import header from './header';

import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
  header,
  results,
  quizz,
  form: formReducer,
  routing: routeReducer
});


export default rootReducer;
