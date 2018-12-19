/*    --------------------------- Comment Block ------------------------------------
      |  Component: Employees Home Page
      |
      |  Purpose:  Component for displaying Home page of Employees
      |         after they login to system as an employee.
      |
      *-------------------------------------------------------------------*/

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../logo.png'
import '../../styles/employee/employee-home.css'
import NavBar from '../../components/navbar'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logIn} from "../../actions/index";

class EmployeeHome extends Component {
  /*    This function helps us to make our Navigation Bar responsive to
        changes of width when the user resizes the browser.
  */
componentDidMount(){
  this.props.logIn('employee')
}
  navbarResponsive() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  /*    Render function of our Component to display required HTML code.
          This component is available in every component; it renders
          proper HTML code based on the component's state.
    */
  render() {

    return (<div>
      <NavBar/>

      <div className="content">

        <div className="headPic"></div>

        <div className="buttons">

          <div id="commisiionRate">
            <p className="rounded">
              <button className="buttonOut">
                <span></span>
                COMMISION RATE
                <span></span>
              </button>
            </p>
          </div>

          <div id="convertCurrency">
            <p className="rounded">
              <button className="buttonOut">
                <span></span>
                CONVERT CURRENCIES
                <span></span>
              </button>
            </p>
          </div>

          <div id="laws">
            <p className="rounded">
              <button className="buttonOut">
                <span></span>
                LAWS and TERMS<span></span>
              </button>
            </p>
          </div>

          <div id="currencyWorth">
            <p className="rounded">
              <button className="buttonOut">
                <span></span>
                ONLINE CURRENCY RATE<span></span>
              </button>
            </p>
          </div>

        </div>

      </div>

    </div>)
  }

}
function mapDispatchToProps(dispatch) {
    return {logIn: bindActionCreators(logIn, dispatch)}
}

export default connect(null, mapDispatchToProps)(EmployeeHome)
