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
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <Typography variant="h6" color="inherit">App Title</Typography>
                            <form className={classes.container} noValidate autoComplete='off'>
                                {this.state.user ? <Button variant="outlined" className={classes.button} onClick={this.logout}>Log Out</Button> : <Button variant="outlined" className={classes.button} onClick={this.login}>Log In</Button>}
                            </form>
                        </Toolbar>
                    </AppBar>
                    <Main authenticated={this.state.authenticated} />
                </div>
            )
        }
    }

    App.propTypes = {
        classes: PropTypes.object.isRequired
    }

    export default withStyles(styles)(App)