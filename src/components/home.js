import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../assets/icons/white-yellow.png'
import heliBG from '../assets/images/lt_heli.jpg'

import '../styles/layout.scss'
import Theme from '../styles/theme.scss'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={'fullContainer column'}>
      <div style={{zIndex: 1}} className='bgImageContainer'>
        <img
        className={'homeBGImage'} src={ heliBG } alt={'LifeTeam Helicopter'} />
        <div style={{zIndex: 2}} className='fs_dim' />
      </div>
        <div style={{zIndex: 2}} className={'baseElement center'}>
          <img
          style={{objectFit: 'contain', margin: 20}}
          className={'logo'} src={ logo } alt={'LifeTeam'} />
        </div>
        <div
        style={{color: Theme.MAIN_BLUE, zIndex: 2}}
        className={'fiveBase center column'}>
          <h1 className='title'>LIFESAVE</h1>
          <p className='subTitle'>Interfacility Transport Score</p>
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
