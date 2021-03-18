import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBr7T__Te-kH5tBbyUiX72g7KNNWIg3_Zw",
    authDomain: "tinder-clone-d4d02.firebaseapp.com",
    projectId: "tinder-clone-d4d02",
    storageBucket: "tinder-clone-d4d02.appspot.com",
    messagingSenderId: "308110142665",
    appId: "1:308110142665:web:0fd0ab638396412a91b118",
    measurementId: "G-9WSZRVVD53"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const auth=firebaseApp.auth();
const db=firebaseApp.firestore();
const storage=firebaseApp.storage();
export {db,auth,storage};  