import React, { Component } from 'react'
import Login from './Login'
import Logout from './Logout'
import { loginUser, login } from '../store/actions/auth'
import { logoutUser } from '../store/actions/auth'

export default class Navbar extends Component {

  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props

    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="#">Quotes App</a>
          <div className='navbar-form'>

            {!isAuthenticated &&
              <Login
                errorMessage={errorMessage}
                onLoginClick={ creds => dispatch(login(creds)) }
              />
            }

            {isAuthenticated &&
              <Logout onLogoutClick={() => dispatch(logoutUser())} />
            }

          </div>
        </div>
      </nav>
    )
  }

}