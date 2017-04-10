import firebase from 'firebase';
 var config = {
    apiKey: "AIzaSyAszK9vg3WQJGXwob1M2aA6t2yOHVDYpAM",
    authDomain: "online-parking-f8612.firebaseapp.com",
    databaseURL: "https://online-parking-f8612.firebaseio.com",
    projectId: "online-parking-f8612",
    storageBucket: "online-parking-f8612.appspot.com",
    messagingSenderId: "152504312203"
  };
  firebase.initializeApp(config);

 
export const database = firebase.database();

export const auth = firebase.auth();
