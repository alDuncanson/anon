import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { auth, provider } from './firebase'
import './App.css'
import Main from './components/Main'
import firebase from './firebase'

const styles = theme => ({
    container: {
        margin: '0 0 0 auto',
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        margin: theme.spacing.unit,
    }
})

class App extends Component {

    state = {
        user: null,
        authenticated: false
    }

    login = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                this.setState({
                    user: result.user,
                    authenticated: true
                })

                firebase.app().database().ref('users').orderByChild('email').equalTo(result.user.email).limitToFirst(1).once('value', snapshot => {
                    const userEmail = snapshot.val()

                    if (userEmail == null) {
                        const usersRef = firebase.database().ref('users')

                        const user = {
                            username: this.state.user.displayName,
                            email: this.state.user.email
                        }
                        usersRef.push(user)
                    }
                })
            })
    }

    logout = () => {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null,
                    authenticated: false
                })
            })
    }

    componentDidMount = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user, authenticated: true })
            }
        })
    }

    render() {
        const { classes } = this.props
        return (
            <div className='app'>
                <AppBar position='static' color='default' elevation={2}>
                    <Toolbar>
                        <Typography variant='h6' color='inherit'>anon.io</Typography>
                        <form className={classes.container} noValidate autoComplete='off'>
                            {this.state.user ? <Button variant='outlined' className={classes.button} onClick={this.logout}>Log Out</Button> : <Button variant='outlined' className={classes.button} onClick={this.login}>Log In</Button>}
                        </form>
                    </Toolbar>
                </AppBar>
                <Main authenticated={this.state.authenticated} user={this.state.user} />
            </div>
        )
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)