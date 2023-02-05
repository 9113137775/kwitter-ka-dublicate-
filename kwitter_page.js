//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDyES7kkXfOQmWjsnExrX5dW1aISbsmjYo",
    authDomain: "kwitter-b4589.firebaseapp.com",
    databaseURL: "https://kwitter-b4589-default-rtdb.firebaseio.com",
    projectId: "kwitter-b4589",
    storageBucket: "kwitter-b4589.appspot.com",
    messagingSenderId: "631720549411",
    appId: "1:631720549411:web:64fc408a9ab8f29e00a596"
  };
  
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");
    
    function addUser() {
        user_name = document.getElementById("user_name").value;
    
        localStorage.setItem("user_name", user_name);
    
        window.location = "kwitter_room.html";
    }