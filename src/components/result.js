import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateAcuity } from '../actions/index'
import { bindActionCreators } from 'redux'
import logo from '../assets/icons/logo.png'

import '../styles/layout.scss'
import Theme from '../styles/theme.scss'

class Result extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transportScore: 'DRIVE'
    }
  }

  scoreTransport = () => {
    let acuity = this.props.acuityScore
    let transport = this.props.flightConditions
    if (transport.weather === 0) {
      return <p className={'transportScore'}>GROUND</p>
    }
    else if (transport.weather === 3 && acuity < 11) {
      return <p className={'transportScore'}>RW</p>
    }
    else if (transport.weather === 4 && acuity < 11) {
      return <p className={'transportScore'}>RW FW</p>
    }
    else if (acuity <= 3) {
      return <p className={'transportScore'}>GROUND</p>
    }
    else if (acuity >= 4 && acuity <= 10) {
      if (transport.miles <= 50) {
        return <p className={'transportScore'}>GROUND</p>
        }
      else if (transport.miles > 50 && transport.miles <= 150) {
        if (transport.weather === 1) {
          return <p className={'transportScore'}>RW FW</p>
        }
        else if (transport.weather === 2) {
          return <p className={'transportScore'}>RW</p>
        }
      }
      else if (transport.miles > 150) {
        return <p className={'transportScore'}>FW</p>
      }
      }
      else if (acuity >= 11) {
        if (transport.miles <= 150) {
          if (transport.weather === 1 || transport.weather === 4) {
            return <p className={'transportScore'}>RW FW</p>
          }
          else if (transport.weather === 2 || transport.weather === 3) {
            return <p className={'transportScore'}>FW</p>
          }
        }
        else if (transport.miles > 150) {
          return <p className={'transportScore'}>FW</p>
        }
      } else {
      return <p className={'transportScore'}>{this.state.transportScore}</p>

    }
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
      console.log('acuity', this.props.acuityScore, this.state.transportScore);
    return (
      <div className={'fullContainer column'}>
        <div className={'baseElement row'}>
        <div style={{alignItems: 'center', margin: 20}} className='baseElement row'>
        <Link
          style={{textDecoration: 'none'}}
          to={'/form'}>
            <div className='backBtn'>
              <p style={{textDecoration: 'none', color: Theme.MAIN_BLUE}}>back</p>
            </div>
          </Link>
        </div>
        <div style={{alignItems: 'center', justifyContent: 'flex-end', margin: 20}} className='baseElement'>
          <Link
          to={'/'}>
          <img
          style={{objectFit: 'contain'}}
          className={'logoSmResult'} src={ logo } alt={'LifeTeam'} />
          </Link>
          </div>
        </div>
        <div className={'twiceBase'}>
          <div className='sectionHead animated fadeInUp'>
            <p className='formHeading'>Transport Plan</p>
          </div>
        </div>
        <div className={'fiveBase column'}>
          <div className={'baseElement column center'}>
            <h3 className={'transportName'}>Mode of Transport</h3>
             {this.scoreTransport()}
          </div>
          <div className={'baseElement column center'}>
          <h3 className={'transportName'}>Level of Crew Specialization</h3>
            {this.renderSpecialization()}
          </div>
        </div>
        <div className={'baseElement center'}>
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
    flightConditions: state.flightConditions
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Result)
