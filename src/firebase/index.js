import firebase from 'firebase/app';
import '@firebase/firestore';

const APIKEY = process.env.REACT_APP_FIREBASE_APIKEY;

const app = firebase.initializeApp({
        apiKey: APIKEY,
        authDomain: "coderhouse-ecom-react.firebaseapp.com",
        projectId: "coderhouse-ecom-react",
        storageBucket: "coderhouse-ecom-react.appspot.com",
        messagingSenderId: "1023007850804",
        appId: "1:1023007850804:web:55965d31939f83e0a36561"
})

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}

