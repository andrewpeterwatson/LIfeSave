
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter } from 'react-router-dom'

import '../styles/layout.scss';
import Theme from '../styles/theme.scss';

import Main from '../components/main'


class App extends Component {
  constructor(props) {
    super(props)
  }




  render() {
    return (
      <BrowserRouter>
        <div className={'app'}>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchDevices }, dispatch);
// }
// function mapStateToProps(state) {
//   return {
//     devices: state.devices,
//    };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App
