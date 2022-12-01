// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDV8p8n4ONyP77Qa8Hl0pLpFiyCpwSTGvs",
    authDomain: "basic-to-do-webapp.firebaseapp.com",
    projectId: "basic-to-do-webapp",
    storageBucket: "basic-to-do-webapp.appspot.com",
    messagingSenderId: "443551962156",
    appId: "1:443551962156:web:c78496bf3b14f125cd6d89",
    measurementId: "G-H4RZLQ6V09"
  };


firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();