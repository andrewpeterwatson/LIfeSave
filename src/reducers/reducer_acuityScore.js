import { UPDATED_ACUITY } from '../actions/index'


export default function(state = 0, action) {
  switch(action.type) {
    case UPDATED_ACUITY:
      return action.payload;
  }
  return state
}
