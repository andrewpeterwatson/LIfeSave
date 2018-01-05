import { combineReducers } from 'redux';

import AcuityScore from './reducer_acuityScore'
import FlightConditions from './reducer_flight_conditions'

const rootReducer = combineReducers({
  flightConditions: FlightConditions,
  acuityScore: AcuityScore
});

export default rootReducer;
