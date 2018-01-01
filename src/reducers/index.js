import { combineReducers } from 'redux';

// import ServerSelected from './reducer_server'
import AcuityScore from './reducer_acuityScore'

const rootReducer = combineReducers({
  // serverSelected: ServerSelected,
  acuityScore: AcuityScore
});

export default rootReducer;
