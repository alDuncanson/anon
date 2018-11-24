import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import firebase from '../firebase'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = (theme) => ({
    
})

class MessageFeed extends Component {

    componentDidMount() {
        const postRef = firebase.database().ref('posts')

        postRef.on('value', (snapshot) => {
            let posts = snapshot.val()
            let newState = []

            for (let post in posts) {
                newState.unshift({
                    post: posts[post].post
                })
            }
            this.setState({
                posts: newState
            })
        })
    }

    state = {
        posts: []
    }

    render() {
        //const { classes } = this.props

        return (
            <List>
                { 
                    this.state.posts.map((post) => {
                        return (
                            <ListItem>
                                <ListItemText primary={`${post.post}`}/>
                            </ListItem>
                        )
                    })
                }
            </List>
        )
    }
}

MessageFeed.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MessageFeed)