// Your web app's Firebase configuration
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
var db = firebase.firestore();

// let's code

function userRegister() {
  var email = document.getElementById("emailaddress").value;
  var password = document.getElementById("password").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      createUser(user);

      firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then(() => {
          // Email verification sent!
          // ...
        });
    })
    .catch((error) => {
      // Error in user registration
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

function createUser(user) {
  var userName = document.getElementById("fullname").value;
  var userID = user.uid;
  db.collection("users")
    .doc(userID)
    .set({
      user_id: userID,
      user_email: user.email,
      user_name: userName,
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}
