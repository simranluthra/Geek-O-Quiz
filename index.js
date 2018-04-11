
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById('user_div').style.display = "block";
    //document.getElementById('login-div').style.display = "none";   changed
//    document.getElementById('Form').style.display = "none"; // changed

    var user = firebase.auth().currentUser;
    if(user!=null){
      var email = user.email;
      document.getElementById("user_para").innerHTML = "Welcome user : " + email;
    }

  } else {
    // No user is signed in.
    document.getElementById('user_div').style.display = "none";
    //document.getElementById('login-div').style.display = "block";  changed
  //  document.getElementById('Form').style.display = "block";  //changed
  }
});
function login(){
  var userEmail = document.getElementById('email_field').value;
  var userPassword = document.getElementById('password_field').value;


  // yeh smjhne ki koshish krna
   firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
         .then(function() {     //yeh success ke liye ki agar login ho gya shi se
             console.log('User creation success');
             location.href = 'file:///home/simran/Documents/web%20project/front.html';
         }, function(error) {
             // do things if failure
             var errorCode = error.code;
             var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
         });



  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("error:" + errorMessage);
    // ...
  });
}

function logout(){
  firebase.auth().signOut();
  location.href = 'file:///home/simran/Documents/web%20project/index.html';
}
