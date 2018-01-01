import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateAcuity } from '../actions/index'
import { bindActionCreators } from 'redux'
import logo from '../assets/icons/lifeteam_logo.png'

import '../styles/layout.scss'
import Theme from '../styles/theme.scss'

class Result extends Component {
  constructor(props) {
    super(props)
  }

  renderSpecialization = () => {
    let acuity = this.props.acuityScore
    if (acuity <= 3) {
        return <p className={'transportScore'}>BLS</p>
      }
    else if (acuity >= 4 && acuity <= 10) {
      return <p className={'transportScore'}>ALS</p>
      }
    else if (acuity >= 11) {
      return <p className={'transportScore'}>Critical Care</p>
      }
  }
  render() {
    return (
      <div className={'fullContainer column'}>
        <div className={'baseElement row'}>
          <div className={'baseElement'}>
            <Link
            to={'/form'}>
              <p style={{margin: 10}}>back</p>
            </Link>
          </div>
          <div className={'baseElement'}>
            <Link
            to={'/'}>
            <img
            style={{objectFit: 'contain'}}
            className={'logo'} src={ logo } alt={'LifeTeam'} />
            </Link>
          </div>
        </div>
        <div className={'halfBase center'}>
          <h2>Transport Plan</h2>
        </div>
        <div className={'fiveBase column'}>
          <div className={'baseElement column center'}>
            <h3 className={'transportName'}>Mode of Transport</h3>
          </div>
          <div className={'baseElement column center'}>
          <h3 className={'transportName'}>Level of Crew Specialization</h3>
            {this.renderSpecialization()}
          </div>
        </div>
        <div className={'baseElement'}>
          <Link
          to={'/'}>
            <div className={'transportBtn center'}>
              <p style={{color: 'white'}}>End</p>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateAcuity: updateAcuity
  }, dispatch)
}

function mapStateToProps(state) {
  return {
    acuityScore: state.acuityScore,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Result)
