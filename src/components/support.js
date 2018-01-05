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
          <p className='formHeading'>Support</p>
        </div>
        <div className={'twiceBase column'}>
          <div className={'baseElement'}>
            <p className={'formQustion'}>Are there vasoactive drips needed to control blood pressure or heart rate? <br /> Or; <br /> Is there need for respiratory or ventilation support, either invasive or noninvasive?</p>
          </div>
          <div className={'baseElement column center'}>
              <select className={'acuityDropdown'} name="acuityMenu1" onChange={this.props.supportChange}>
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
