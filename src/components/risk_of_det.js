import React, { Component } from 'react';

import '../styles/layout.scss'
import Theme from '../styles/theme.scss'

class ROD extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className={'acuityElContainer center'}>
      <form name="acuity1" style={{display: 'flex', flex: 1}} className={'column center'}>
        <div className={'quarterBase'}>
        <div className='sectionHead animated fadeInUp'>
          <p className='formHeading'>Risk of Deterioration</p>
        </div>
        </div>
        <div className={'twiceBase column'}>
          <div className={'baseElement formatEighty'}>
            <p className={'formQustion animated fadeInUp'}>Are they early in their clinical course requiring transfer, i.e.,2h or less in the hospital?</p>
          </div>
          <div className={'baseElement column center'}>
              <select className={'acuityDropdown animated fadeInUp'} name="acuityMenu1" onChange={this.props.rodChange1}>
                <option>Answer</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
          </div>
        </div>
        <div className={'twiceBase column'}>
          <div className={'baseElement formatEighty'}>
            <p className={'formQustion animated fadeInUp'}>Would ground transport put them out of the hospital environment for more than 45 minutes?</p>
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
          <div className={'baseElement formatEighty'}>
            <p className={'formQustion animated fadeInUp'}>Are they less than 5 or greater than 65 yo; <br /> or  <br />do they have multiple comorbidities or a high disease burden?</p>
          </div>
          <div className={'baseElement column center'}>
              <select className={'acuityDropdown animated fadeInUp'} name="acuityMenu1" onChange={this.props.rodChange3}>
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
