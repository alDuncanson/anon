import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
    container: {
        display: 'flex'
    }
})

class Main extends Component {

    state = {
        user: null,
        loggedIn: false
    }

    componentWillReceiveProps = (prop) => {
        this.setState({
            loggedIn: prop.authenticated
        })
    }

    render() {
        const { classes } = this.props

        return (
            <div className={classes.container}>
                {this.state.loggedIn ? 
                    <p>Logged In</p> 
                : 
                <p>Ope, nothin to see here</p>
                }
            </div>
        )
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Main)