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
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<dv class='room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html"; 
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}


