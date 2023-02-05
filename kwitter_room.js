ser_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

 function addUser() {
  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);

  window.location = "kwitter_room.html";
}
function addRoom() {
  room_name = document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyDHjhEh0VB9rvGfrWQ0JdRHCGSUHtCvr5k",
  authDomain: "kwitter-ka-dublicate.firebaseapp.com",
  databaseURL: "https://kwitter-ka-dublicate-default-rtdb.firebaseio.com",
  projectId: "kwitter-ka-dublicate",
  storageBucket: "kwitter-ka-dublicate.appspot.com",
  messagingSenderId: "1042995882443",
  appId: "1:1042995882443:web:f0f26a58f07d567ba12e4e"
};

firebase.initializeApp
(firebaseConfig);

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
window.location = "index.html";
}




