// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByDKUYzGF0N5yt5XcQ-EU1-eS8b9Xprw4",
    authDomain: "oib-todo-app.firebaseapp.com",
    databaseURL: "https://oib-todo-app-default-rtdb.firebaseio.com",
    projectId: "oib-todo-app",
    storageBucket: "oib-todo-app.appspot.com",
    messagingSenderId: "642622619435",
    appId: "1:642622619435:web:02af0fa690a2ad13754f6e",
    measurementId: "G-3JMEQVKLYM"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();