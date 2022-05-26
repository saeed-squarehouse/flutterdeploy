importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
   apiKey: "AIzaSyAJUsyCoHQ2YgYZKQEt4SJpAu6FKAs2AWs",
   authDomain: "mall-of-turkeya-7981f.firebaseapp.com",
   projectId: "mall-of-turkeya-7981f",
   storageBucket: "mall-of-turkeya-7981f.appspot.com",
   messagingSenderId: "63544847789",
   appId: "1:63544847789:web:f0006918047100eb31c524",
   measurementId: "G-RVEH5QPNP5"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();