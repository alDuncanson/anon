import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import firebase from '../firebase'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import Like from '@material-ui/icons/ThumbUp';

const styles = () => ({
    list: {
        width: '100%',
        height: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    paper: {
        width: '80%',
        padding: '21px',
        margin: '21px auto 21px 0'
    },
    listItem: {
        overflowX: 'hidden'
    },
    likeButton: {
        boxShadow: '2px 2px 2px #c5c5c5',
        borderRadius: '3px',
        padding: '5px',
        
        '&:hover': {
            boxShadow: '3px 3px 3px #c5c5c5',
            cursor: 'pointer'
        },

        '&:active': {
            boxShadow: '1px 1px 1px #c5c5c5'
        }
    },
    likes: {
        marginLeft: '13px'
    }
})

class MessageFeed extends Component {

    componentDidMount() {
        const postRef = firebase.database().ref('posts')

        postRef.on('value', (snapshot) => {
            let posts = snapshot.val()
            let newState = []

            for (let post in posts) {
                newState.unshift({
                    post: posts[post].post,
                    id: post,
                    likes: posts[post].likes
                })
            }
            this.setState({
                posts: newState
            })
        })
    }

    like = (key, index, numOfLikes) => {
        let newLikes = numOfLikes + 1

        firebase.database().ref(`posts/${key}`).update({ likes: newLikes })
    }

    state = {
        posts: []
    }

    render() {
        const { classes } = this.props

        return (
            <List className={classes.list}>
                { 
                    this.state.posts.map((post, index) => {
                        return (
                            <Paper key={post.id} className={classes.paper} elevation={1}>
                                <ListItem className={classes.listItem}>
                                    <ListItemText primary={`${post.post}`}/>
                                    <Like className={classes.likeButton} onClick={() => this.like(post.id, index, post.likes)}/>
                                    <p className={classes.likes}>{post.likes}</p>
                                </ListItem>
                            </Paper>
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