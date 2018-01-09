import React, { Component } from 'react';

import '../styles/layout.scss'
import Theme from '../styles/theme.scss'

class LOC extends Component {
  constructor(props) {
    super(props)
  }



  render() {
    return (
      <div className={'acuityElContainer column'}>
      <form name="acuity1" style={{display: 'flex'}} className={'column center'}>
        <div className={'baseElement'}>
          <p className='formHeading animated fadeInUp'>Level of Care</p>
        </div>
        <div className={'twiceBase column'}>
          <div className={'twiceBase'}>
            <p className={'formQustion animated fadeInUp'}>Do they have a time critical illness? e.g., stroke, acute MI, trauma, sepsis</p>
          </div>
          <div className={'baseElement column center'}>
              <select className={'acuityDropdown animated fadeInUp'} name="acuityMenu1" onChange={this.props.locChange1}>
                <option>Answer</option>
                <option value={4}>YES</option>
                <option value={0}>NO</option>
              </select>
          </div>
        </div>
        <div className={'twiceBase column'}>
          <div className={'twiceBase'}>
            <p className={'formQustion animated fadeInUp'}>What is the care they will need?</p>
          </div>
          <div className={'baseElement column center'}>
              <select className={'acuityDropdown animated fadeInUp'} name="acuityMenu2" onChange={this.props.locChange2}>
                <option>Answer</option>
                <option value={0}>Floor Bed</option>
                <option value={4}>Telemetry</option>
                <option value={5}>ICU care or emergent treatment</option>
              </select>
          </div>
        </div>
        <div className={'twiceBase column'}>
          <div className={'twiceBase'}>
            <p className={'formQustion animated fadeInUp'}>In the prior 2 hours, have they had symptoms requiring intervention such as:  hemodynamic instability, arrhythmia, neurologic change, intractable pain, other?</p>
          </div>
          <div className={'baseElement column center'}>
              <select className={'acuityDropdown animated fadeInUp'} name="acuityMenu2" onChange={this.props.locChange3}>
                <option>Answer</option>
                <option value={4}>YES</option>
                <option value={0}>NO</option>
              </select>
          </div>
        </div>
        </form>
      </div>
    )
  }
}


export default LOC
