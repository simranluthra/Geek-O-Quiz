function signup(){
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  if (email && password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function() {
            console.log('User creation success');
            location.href = 'file:///home/simran/Documents/web%20project/index.html';
        }, function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          $scope.regError = true;
          $scope.regErrorMessage = errorMessage;
        });
  }
}
