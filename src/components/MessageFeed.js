import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
    
})

class Main extends Component {

    state = {
    }

    render() {
        //const { classes } = this.props

        return (
            <p>hello world</p>
        )
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Main)