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
        <div className={'quarterBase'}>
          <p>Flight Conditions</p>
        </div>
        <div className={'twiceBase column'}>
          <div className={'baseElement'}>
            <p className={'formQustion'}>Distance</p>
          </div>
          <div className={'baseElement row center'}>
            <input onChange={this.props.distChange} className={'transportInput'} type='number' />
            <p>mi</p>
          </div>
        </div>
        <div className={'twiceBase column'}>
          <div className={'baseElement'}>
            <p className={'formQustion'}>Weather along path</p>
          </div>
          <div className={'baseElement column center'}>
              <select className={'acuityDropdown'} name="acuityMenu1" onChange={this.props.weatherChange}>
                <option>Answer</option>
                <option value={3}>Not Drivable</option>
                <option value={0}>0/0</option>
                <option value={1}>VFR</option>
                <option value={2}>IFR</option>
              </select>
          </div>
        </div>
        <div className={'twiceBase column'}>
          <div className={'baseElement'}>
            <p className={'formQustion'}>Patient Weight</p>
          </div>
          <div className={'baseElement row center'}>
          <input onChange={this.props.weightChange} className={'transportInput'} type='number' />
          <p>lbs</p>
          </div>
        </div>
        </form>
      </div>
    )
  }
}


export default FlightConditions
