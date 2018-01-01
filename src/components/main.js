
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './home'
import Form from '../containers/form'
import Result from './result'

import '../styles/layout.scss'
import Theme from '../styles/theme.scss'

class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' render={ () =>
              <Home />
            }
          />
          <Route path='/form' component={Form}/>
          <Route path='/result' component={Result}/>
        </Switch>
      </main>
    );
  }

}
// function mapStateToProps(state) {
//   return {
//     settingsShown: state.settingsShown,
//     activeNav: state.activeNav,
//     devices: state.devices
//    }
// }


export default Main





// render() {
//   return (
//     <main>
//       <Switch>
//         <Route exact path='/' render={ () =>
//             <Dash devices={this.props.devices} />
//           }
//         />
//         <Route path='/devices' component={Devices}/>
//         <Route path='/net-graph' component={NetGraph}/>
//         <Route path='/incoming' component={Incoming}/>
//       </Switch>
//       {this.props.settingsShown ? <div className={'deviceDataModalContainer'}><SettingsModal /></div> : null}
//     </main>
//   );
// }
