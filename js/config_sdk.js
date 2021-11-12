function include(file) {
  var script = document.createElement("script");
  script.src = file;
  script.type = "text/javascript";
  script.defer = true;

  document.getElementsByTagName("head").item(0).appendChild(script);
}

include("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
include("https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js");
include("https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js");
include("https://www.gstatic.com/firebasejs/8.10.0/firebase-storage.js");
