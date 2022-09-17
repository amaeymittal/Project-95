var firebaseConfig = {
    apiKey: "AIzaSyCOQiTaVL1oSKIEW-kvheqrbUrJcnHlVhA",
    authDomain: "projectdb-c0486.firebaseapp.com",
    databaseURL: "https://projectdb-c0486-default-rtdb.firebaseio.com",
    projectId: "projectdb-c0486",
    storageBucket: "projectdb-c0486.appspot.com",
    messagingSenderId: "181621866168",
    appId: "1:181621866168:web:b145a1d5a1c93a225c7e4d"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
document.getElementById("user_name").value = localStorage.getItem("user_name")

 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("room_name = "+ room_name);
 row = "<div class='room_name' id="+Room_names+"onclick'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welocme " + user_name + "!";

function add_room(){
 var room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
       purpose:"adding room"
 });
 localStorage.setItem("room_name",room_name);
 window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location = "kwitter_page.html";
}