import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = () => ({
    container: {
        display: 'flex',
        height: 'calc(100% - 64px)',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

class Main extends Component {

    state = {
        user: null,
        loggedIn: false
    }

    componentWillReceiveProps = (prop) => {
        this.setState({
            loggedIn: prop.authenticated,
            user: prop.user
        })
    }

    render() {
        const { classes } = this.props

        return (
            <div className={classes.container}>
                {this.state.loggedIn ? 
                <Typography variant="h6" gutterBottom>
                    Welcome, { this.state.user.displayName }
                </Typography>
                : 
                <Typography variant="h6" gutterBottom>
                    Ope, nothing to see here
                </Typography>
                }
            </div>
        )
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Main)