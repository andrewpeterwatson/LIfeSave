import React, { Component } from 'react';

import '../styles/layout.scss'
import Theme from '../styles/theme.scss'

class ROD extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className={'acuityElContainer'}>
      <form name="acuity1" style={{display: 'flex'}} className={'column center'}>
        <div className={'quarterBase'}>
          <p>Risk of Deterioration</p>
        </div>
        <div className={'twiceBase column'}>
          <div className={'baseElement'}>
            <p className={'formQustion'}>Where are they in their clinical course  (2h or less in the hospital)</p>
          </div>
          <div className={'baseElement column center'}>
              <select className={'acuityDropdown'} name="acuityMenu1" onChange={this.props.rodChange1}>
                <option>Answer</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
          </div>
        </div>
        <div className={'twiceBase column'}>
          <div className={'baseElement'}>
            <p className={'formQustion'}>Will they be out of the hospital environment for more than 45  minutes during transport?</p>
          </div>
          <div className={'baseElement column center'}>
              <select className={'acuityDropdown'} name="acuityMenu1" onChange={this.props.rodChange2}>
                <option>Answer</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
          </div>
        </div>
        <div className={'twiceBase column'}>
          <div className={'baseElement'}>
            <p className={'formQustion'}>Are they less than 5 or greater than 65 yo; or do they have multiple comorbidities or a high disease burden?</p>
          </div>
          <div className={'baseElement column center'}>
              <select className={'acuityDropdown'} name="acuityMenu1" onChange={this.props.rodChange3}>
                <option>Answer</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
          </div>
        </div>
        </form>
      </div>
    )
  }
}


export default ROD
