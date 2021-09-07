import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCkNGZRsk2krNoxmq1BXKpT-L_Jml6rR_A",
    authDomain: "blogging-app-eec1a.firebaseapp.com",
    projectId: "blogging-app-eec1a",
    storageBucket: "blogging-app-eec1a.appspot.com",
    messagingSenderId: "966584354495",
    appId: "1:966584354495:web:82cf959db226408930e80a",
    measurementId: "G-B301KSJDJH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }

