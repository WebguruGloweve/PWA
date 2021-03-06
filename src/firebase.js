import * as firebase from 'firebase';

const config = {
    // apiKey: "AIzaSyAmJp2um4gzBYV78X7H-92VzdE3RChZf58",
    // authDomain: "doctorcases-web-dev.firebaseapp.com",
    // databaseURL: "https://doctorcases-web-dev.firebaseio.com",
    // projectId: "doctorcases-web-dev",
    // storageBucket: "doctorcases-web-dev.appspot.com",
    // messagingSenderId: "706019123394"
    
    apiKey: "AIzaSyAxuUTIK3bSLW9imRewJNJa0k7Y_kw5Lr4",
    authDomain: "doctocases.firebaseapp.com",
    databaseURL: "https://doctocases.firebaseio.com",
    projectId: "doctocases",
    storageBucket: "doctocases.appspot.com",
    messagingSenderId: "534302772599",

    clientId: '534302772599-h9ms28hq8u9kurnuikg9i2jrrl6d9gku.apps.googleusercontent.com',
    scopes: ["https://www.googleapis.com/auth/presentations", "https://www.googleapis.com/auth/drive"],
    discoverDocs: ["https://slides.googleapis.com/$discovery/rest?version=v1", "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]

  
};
firebase.initializeApp(config);

const Database = firebase.database();
const Auth = firebase.auth();
const Storage = firebase.storage();
const FileStore = firebase.firestore();
// const Messaging = firebase.messaging();
const Functions = firebase.functions();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { Database, Auth, Storage, FileStore,/* Messaging,*/ Functions, googleAuthProvider };