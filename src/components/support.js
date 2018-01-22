import React, { Component } from 'react';

import '../styles/layout.scss'
import Theme from '../styles/theme.scss'

class Support extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className={'support center'}>
      <form name="acuity1" style={{display: 'flex'}} className={'column center'}>
        <div className={'quarterBase'}>
        <div className='sectionHead animated fadeInUp'>
          <p className='formHeading'>Support</p>
        </div>
        </div>
        <div className={'twiceBase column'}>
          <div className={'baseElement formatEighty'}>
            <p className={'formQustion animated fadeInUp'}>Does their blood pressure or heart rhythm require control, either by drips or pacing? <br />  Are they receiving blood products or have they just completed receiving blood products? <br /> Is respiratory support necessary through invasive or noninvasive means?</p>
          </div>
          <div className={'baseElement column center'}>
              <select className={'acuityDropdown animated fadeInUp'} name="acuityMenu1" onChange={this.props.supportChange}>
                <option>Answer</option>
                <option value={5}>YES</option>
                <option value={0}>NO</option>
              </select>
          </div>
        </div>
        </form>
      </div>
    )
  }
}


export default Support
