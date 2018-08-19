import * as firebase from 'firebase/app'
import 'firebase/auth'

if (!!!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBSnJhqs34PHe_ard7MZjj4H0BxAKOfNVU',
    authDomain: 'chatingo-67b92.firebaseapp.com',
    databaseURL:'https://chatingo-67b92.firebaseio.com',
    projectId: 'chatingo-67b92',
    storageBucket: 'chatingo-67b92.appspot.com',
    messagingSenderId: '711959627921'
  })
}

export default firebase