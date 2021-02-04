import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
        apiKey: "AIzaSyDrlFc1RHcE6vjlajAfiX-CbnhDYVdH_wo",
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

