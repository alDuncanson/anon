import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import firebase from '../firebase'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import Like from '@material-ui/icons/ThumbUp'
import Close from '@material-ui/icons/Close'

const styles = () => ({
    paper: {
        width: '75%',
        margin: '21px auto 21px auto',
        padding: '21px'
    },
    listItem: {
        overflowX: 'hidden'
    },
    closeButton: {
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
            const posts = snapshot.val()
            const newState = []

            for (let post in posts) {
                newState.unshift({
                    post: posts[post].post,
                    email: posts[post].email,
                    likes: posts[post].likes,
                    id: post
                })
            }
            this.setState({
                posts: newState
            })
        })
    }

    like = (key, numOfLikes) => firebase.database().ref(`posts/${key}`).update({ likes: numOfLikes += 1 })

    close = (key) => firebase.database().ref(`posts/${key}`).remove()

    state = {
        posts: [],
        user: null
    }

    componentWillReceiveProps = (prop) => {
        this.setState({
            user: prop.user
        })
    }

    render() {
        const { classes } = this.props

        return (
            <List>
                { 
                    this.state.posts.map((post, index) => {
                        return (
                            <Paper key={post.id} className={classes.paper} elevation={1}>
                                <ListItem className={classes.listItem}>
                                    <ListItemText primary={`${post.post}`}/>
                                    {this.state.user ? 
                                        this.state.user.email === post.email ? <Close className={classes.closeButton} onClick={() => this.close(post.id, this.state.user.email)}/> : null   
                                    : null}
                                    <Like className={classes.likeButton} onClick={() => this.like(post.id, post.likes)}/>
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