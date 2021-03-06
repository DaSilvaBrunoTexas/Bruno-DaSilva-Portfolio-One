//Initialize Firebase
var config = {
  apiKey: "AIzaSyDsHvptkXsLIDK0SO_KFoSopxn_NlfXC_U",
  authDomain: "contactform-4434c.firebaseapp.com",
  databaseURL: "https://contactform-4434c.firebaseio.com",
  projectId: "contactform-4434c",
  storageBucket: "contactform-4434c.appspot.com",
  messagingSenderId: "901924457770"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref("messages");

//Add an event listner For Submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

//Submit Form Func
function submitForm(e) {
  //Prevent default HTML behavior
  e.preventDefault();

  //Get Values
  var name = getInputVal("form-name");
  var email = getInputVal("form-email");
  var subject = getInputVal("form-subject");
  var message = getInputVal("form-message");

  //Calling Save Message Function
  saveMessages(name, email, subject, message);

  // Display Alert
  document.querySelector(".alert").style.display = "block";

  //hide alert after 4 seconds

  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 4000);

  //reset form to empty inputs
  document.getElementById("contactForm").reset();
}

// Get Form Values
function getInputVal(id) {
  return document.getElementById(id).value;
}

//Save Message to Firebase

function saveMessages(name, email, subject, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message
  });
}
