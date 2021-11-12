// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // change state if user signed in
//     var uid = user.uid;
//     document.getElementById("body").style.display = "block";
//     // ...
//   } else {
//     // User is signed out
//   }
// });

function login() {
  var userEmail = document.getElementById("emailaddress").value;
  var userPass = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("error: " + errorMessage);
    });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      console.log("user logged in successfully");
      window.location = "index.html";
    } else {
      // User is signed out
      // ...
    }
  });
}

function signout() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      console.log("logout successful");
      window.location = "login.html";
    })
    .catch(function (error) {
      // An error happened
    });
}
