import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo     from '../assets/icons/logoOnly.png'
import heliBG   from '../assets/images/heli.png'
import PlaneImg from '../assets/images/plane_01.jpg'

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
        className={'homeBGImage'} src={ PlaneImg } alt={'LifeTeam Helicopter'} />
        <div style={{zIndex: 2}} className='fs_dim' />
      </div>
        <div
        style={{color: Theme.MAIN_BLUE, zIndex: 2}}
        className={'fiveBase center column'}>
        <div style={{zIndex: 2}} className={'baseElement column center'}>
        <img
        style={{objectFit: 'contain', margin: 20}}
        className={'logo'} src={ logo } alt={'LifeTeam'} />
        <p className='subTitle'>Interfacility Transport Score</p>
        <Link
        to={'/form'}>
        <div className={'startBtn center'}>
        <p style={{color: 'white'}}>Begin</p>
        </div>
        </Link>
        </div>
        </div>
        <div className={'baseElement'}>
        </div>
      </div>
    )
  }
}


export default Home
