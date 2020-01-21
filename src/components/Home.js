import React, { Component } from 'react'
import { connect } from 'react-redux'
import { doAuthentication } from '../store/actions/auth'

import Login from '../components/Login'
import Navbar from '../components/Navbar'

class Home extends Component {
    render() {
        const { dispatch, isAuthenticated, errorMessage } = this.props

        return (
            <div>
                <Navbar 
                    isAuthenticated={isAuthenticated}
                    errorMessage={errorMessage}
                    dispatch={dispatch}          
                />
            </div>
        )
    }
}


function mapStateToProps(state) {

    const { auth } = state 
    const { isAuthenticated, errorMessage } = auth

    return {
        isAuthenticated,
        errorMessage
    }
}

export default connect(mapStateToProps)(Home)