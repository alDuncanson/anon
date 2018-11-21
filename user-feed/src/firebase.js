import firebase from 'firebase'

const config = {
    apiKey: 'AIzaSyDcyfdg5qzoEbM-9v7Q6WwpGJQIZqfQQRU',
    authDomain: 'user-feed-84a20.firebaseapp.com',
    databaseURL: 'https://user-feed-84a20.firebaseio.com',
    projectId: 'user-feed-84a20',
    storageBucket: 'user-feed-84a20.appspot.com',
    messagingSenderId: '969646773326'
}

firebase.initializeApp(config)
export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export default firebase