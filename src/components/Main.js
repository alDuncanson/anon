import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import MessageFeed from './MessageFeed'
import firebase from '../firebase'

const styles = (theme) => ({
    container: {
        display: 'flex',
        height: 'calc(100% - 64px)'
    },
    center: {
        display: 'flex',
        height: 'calc(100% - 64px)',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    avatar: {
        width: 120,
        height: 120,
        margin: '16px auto 0 auto',
    },
    postContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '21px',
        height: 'calc(100% - 42px)',
        borderRight: '1px solid #c5c5c5'
    },
    welcome: {
        width: '85%',
        margin: '0 auto',
        textAlign: 'center'
    },
    postField: {
        width: '70%',
        margin: '16px auto'
    },
    postButton: {
        width: '70%',
        margin: '0 auto'
    }
})

class Main extends Component {

    state = {
        user: null,
        loggedIn: false,
        post: ''
    }

    componentWillReceiveProps = (prop) => {
        this.setState({
            loggedIn: prop.authenticated,
            user: prop.user
        })
    }

    handleChange = (event) => {
        this.setState({post: event.target.value})
    }

    handleSubmit = () => {
        const posts = firebase.database().ref('posts')
        const post = {
            post: this.state.post
        }
        posts.push(post)
    }

    render() {
        const { classes } = this.props

        return (
            <div className={classes.container}>
                {this.state.loggedIn ?
                    <Grid container>
                        <Grid item xs={4}>
                            <div className={classes.postContainer}>
                                <Typography variant='h6' gutterBottom className={classes.welcome}>Welcome, {this.state.user.displayName}</Typography>
                                <Avatar alt='Profile Photo' src={this.state.user.photoURL} className={classes.avatar} />
                                <TextField id='post-field' label="What's on your mind" multiline rowsMax='4' className={classes.postField} margin='normal' value={this.state.post} onChange={this.handleChange}/>
                                <Button id='post-button' variant='outlined' className={classes.postButton} onClick={this.handleSubmit}>Post</Button>
                            </div>
                        </Grid>
                        <Grid item xs={8}>
                            <MessageFeed/>
                        </Grid>
                    </Grid>
                    :
                    <div className={classes.center}>
                        <Typography variant='h6' gutterBottom>Ope, nothing to see here</Typography>
                    </div>
                }
            </div>
        )
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Main)