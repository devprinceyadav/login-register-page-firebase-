const firebaseConfig = {
  apiKey: "AIzaSyB66K8ZpvmAV9fC80NCnngzeMu9ynsJu6g",
  authDomain: "fir-js-c77a0.firebaseapp.com",
  databaseURL: "https://fir-js-c77a0-default-rtdb.firebaseio.com",
  projectId: "fir-js-c77a0",
  storageBucket: "fir-js-c77a0.appspot.com",
  messagingSenderId: "735001706293",
  appId: "1:735001706293:web:92f40b31e1ca951196d67c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refrences
const storageRef = firebase.storage().ref();
var dbRef = firebase.firestore();
