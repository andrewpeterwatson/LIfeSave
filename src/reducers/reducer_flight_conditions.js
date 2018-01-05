import { UPDATED_FlightConditions } from '../actions/action_update_flight_conditions'


export default function(state = {}, action) {
  switch(action.type) {
    case UPDATED_FlightConditions:
      return action.payload;
  }
  return state
}
