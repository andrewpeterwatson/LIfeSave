import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateAcuity } from '../actions/index'
import { updateFC } from '../actions/action_update_flight_conditions'
import { bindActionCreators } from 'redux'

import logo from '../assets/icons/lifeteam_logo.png'

import LOC from '../components/level_of_care'
import ROD from '../components/risk_of_det'
import Support from '../components/support'
import FlightConditions from '../components/flight_conditions'

import '../styles/layout.scss'
import Theme from '../styles/theme.scss'

class Form extends Component {
  constructor(props) {
    super(props)
    this.setAcuity = this.setAcuity.bind(this)
    this.locChange1 = this.locChange1.bind(this)
    this.locChange2 = this.locChange2.bind(this)
    this.locChange3 = this.locChange3.bind(this)
    this.distChange = this.distChange.bind(this)
    this.weatherChange = this.weatherChange.bind(this)
    this.weightChange = this.weightChange.bind(this)
    this.supportChange = this.supportChange.bind(this)
    this.toggleShowAcuityScore = this.toggleShowAcuityScore.bind(this)
    this.state = {
      showAcuity: false,
      acuityScore: 0,
      locAcuity: {
        1: null,
        2: null,
        3: null
      },
      supportAcuity: null,
      rodAcuity: {
        1: null,
        2: null,
        3: null
      },
      flightConditions: {
        miles: null,
        weather: null,
        weight: null
      }
    }
  }

  locChange1 = (e) => {
    let loc = this.state.locAcuity
    loc[1] = parseInt(e.target.value)
    this.setState({ locAcuity: loc })
  }
  locChange2 = (e) => {
    let loc = this.state.locAcuity
    loc[2] = parseInt(e.target.value)
    this.setState({ locAcuity: loc })
  }
  locChange3 = (e) => {
    let loc = this.state.locAcuity
    loc[3] = parseInt(e.target.value)
    this.setState({ locAcuity: loc })
  }
  supportChange = (e) => {
    let supportAcuity = this.state.supportAcuity
    supportAcuity = parseInt(e.target.value)
    this.setState({ supportAcuity })
  }
  rodChange1 = (e) => {
    let rod = this.state.rodAcuity
    rod[1] = parseInt(e.target.value)
    this.setState({ rodAcuity: rod })
  }
  rodChange2 = (e) => {
    let rod = this.state.rodAcuity
    rod[2] = parseInt(e.target.value)
    this.setState({ rodAcuity: rod })
  }
  rodChange3 = (e) => {
    let rod = this.state.rodAcuity
    rod[3] = parseInt(e.target.value)
    this.setState({ rodAcuity: rod })
  }
  setAcuity = (acuityScore) => {
    this.setState({ acuityScore })
  }
  toggleShowAcuityScore = () => {
    this.setState({ showAcuity: !this.state.showAcuity })
  }
  scoreAcuity = () => {
    let loc = this.state.locAcuity
    let support = this.state.supportAcuity
    let rod = this.state.rodAcuity
    let acuityScore = loc[1] + loc[2] + loc[3] + support + rod[1] + rod[2] + rod[3]
    this.setAcuity(acuityScore)
    this.toggleShowAcuityScore()
    this.props.updateAcuity(acuityScore)
  }
  distChange = (miles) => {
    let flightConditions = this.state.flightConditions
    flightConditions.miles = parseInt(miles.target.value)
    this.setState({ flightConditions })
  }
  weatherChange = (weather) => {
    let flightConditions = this.state.flightConditions
    flightConditions.weather = parseInt(weather.target.value)
    this.setState({ flightConditions })
  }
  weightChange = (weight) => {
    let flightConditions = this.state.flightConditions
    flightConditions.weight = parseInt(weight.target.value)
    this.setState({ flightConditions })
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
      <div className={'fullContainer center column'}>
          <div className={'headerContainer row'}>
          <div style={{alignItems: 'center', margin: 20}} className='baseElement row'>
          { !this.state.showAcuity ? <Link
            style={{textDecoration: 'none'}}
            to={'/'}>
              <div className='backBtn'>
                <p style={{textDecoration: 'none', color: Theme.MAIN_BLUE}}>back</p>
              </div>
            </Link>
            : <div onClick={() => this.setState({ showAcuity: false })} className='backBtn'>
                <p style={{textDecoration: 'none', color: Theme.MAIN_BLUE}}>back</p>
              </div>
            }
          </div>
          <div style={{alignItems: 'center', justifyContent: 'flex-end', margin: 20}} className='baseElement'>
            <Link
            to={'/'}>
            <img
            style={{objectFit: 'contain'}}
            className={'logoSm'} src={ logo } alt={'LifeTeam'} />
            </Link>
            </div>
        </div>
        <div className={'fiveBase column'}>
        { !this.state.showAcuity ? <div>
            <LOC
            locChange1={this.locChange1}
            locChange2={this.locChange2}
            locChange3={this.locChange3}
            />
            <Support
            supportChange={this.supportChange} />
            <ROD
            rodChange1={this.rodChange1}
            rodChange2={this.rodChange2}
            rodChange3={this.rodChange3}/>

            <div className={'btnContainer'}>
            <div className={'transportBtn center'}
            onClick={() => this.scoreAcuity()}>
            <p style={{color: 'white'}}>Score Acuity</p>
            </div>
            </div>
          </div> : <div>
            <div className={'flightConditionsContainer column center'}>
            <div style={{textAlign: 'center'}}>
            <h2 className={'transportScore'}>{this.state.acuityScore}</h2>
              {this.renderSpecialization()}
            <p className='animated fadeInUp'>Acuity Score</p>
            </div>
            <div>
            <FlightConditions
            distChange={this.distChange}
            weatherChange={this.weatherChange}
            weightChange={this.weightChange} />
            </div>
            <Link
            to={'/result'}
            onClick={() => this.props.updateFC(this.state.flightConditions)}>
            <div className={'transportBtn center'}>
            <p style={{color: 'white'}}>Transport Plan</p>
            </div>
            </Link>
            </div>
            </div>
        }
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateFC: updateFC,
    updateAcuity: updateAcuity
  }, dispatch)
}

function mapStateToProps(state) {
  return {
    acuityScore: state.acuityScore,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Form)
