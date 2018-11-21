import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import './Login.css'

const styles = theme => ({
    container: {
        margin: '54px auto 0 auto',
        width: '300px',
        display: 'flex',
        flexDirection: 'column'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    button: {
        margin: theme.spacing.unit,
    }
})

class Login extends Component {

    state = {
        name: null,
        password: null
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        })
    }

    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            App Title
                    </Typography>
                    </Toolbar>
                </AppBar>
                <form className={classes.container} noValidate autoComplete='off'>
                    <TextField
                        id='username'
                        label='Name'
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                    />
                    <TextField
                        id='password'
                        label='Password'
                        className={classes.textField}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                    />
                    <Button variant="outlined" className={classes.button}>
                        Submit
                </Button>
                </form>
            </Fragment>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login)
