import { SERVER_SELECTED } from '../actions/action_server_select'


export default function(state = '10.128.100.14', action) {
  switch(action.type) {
    case SERVER_SELECTED:
      return action.payload;
  }
  return state
}
