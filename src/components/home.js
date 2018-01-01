import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../assets/icons/lifeteam_logo.png'

import '../styles/layout.scss'
import Theme from '../styles/theme.scss'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={'fullContainer column'}>
        <div className={'baseElement rowEnd'}>
          <img
          style={{objectFit: 'contain', margin: 10}}
          className={'logo'} src={ logo } alt={'LifeTeam'} />
        </div>
        <div
        style={{color: Theme.MAIN_BLUE}}
        className={'fiveBase center column'}>
          <h1>LifeSave</h1>
          <Link
          to={'/form'}>
            <div className={'startBtn center'}>
              <p style={{color: 'white'}}>Begin</p>
            </div>
          </Link>
        </div>
        <div className={'baseElement'}>
        </div>
      </div>
    )
  }
}


export default Home
