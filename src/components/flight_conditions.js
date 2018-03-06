import React, { Component } from 'react';

import '../styles/layout.scss'
import Theme from '../styles/theme.scss'

class FlightConditions extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className={'baseElement'}>
      <form name="acuity1" style={{display: 'flex'}} className={'column center'}>
      <div className={'baseElement'}>
        <div className='sectionHead animated fadeInUp'>
          <p className='formHeading'>Flight Conditions</p>
        </div>
      </div>
        <div className={'twiceBase column distanceConatainer'}>
          <div className={'baseElement'}>
            <p className={'formQustion animated fadeInUp'}>Distance</p>
          </div>
          <div className={'baseElement row center'}>
            <input onChange={this.props.distChange} className={'transportInput animated fadeInUp'} type='number' />
            <p>mi</p>
          </div>
        </div>
        <div className={'twiceBase column'}>
          <div className={'baseElement'}>
            <p className={'formQustion animated fadeInUp'}>Weather along path</p>
          </div>
          <div className={'baseElement column center'}>
              <select className={'acuityDropdown animated fadeInUp'} name="acuityMenu1" onChange={this.props.weatherChange}>
                <option>Answer</option>
                <option value={3}>Not Drivable(IFR)</option>
                <option value={4}>Not Drivable(VFR)</option>
                <option value={0}>0/0</option>
                <option value={1}>VFR</option>
                <option value={2}>IFR</option>
              </select>
          </div>
        </div>
        <div className={'twiceBase column'}>
          <div className={'baseElement'}>
            <p className={'formQustion animated fadeInUp'}>Patient Weight</p>
          </div>
          <div className={'baseElement row center'}>
          <input onChange={this.props.weightChange} className={'transportInput animated fadeInUp'} type='number' />
          <p>lbs</p>
          </div>
        </div>
        </form>
      </div>
    )
  }
}


export default FlightConditions
