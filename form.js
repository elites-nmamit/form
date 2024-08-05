

const firebaseConfig = {
    apiKey: "AIzaSyCsE6kDUJJeRU6UpZ8wlqt2OreXLNox1ys",
    authDomain: "example-f9378.firebaseapp.com",
    databaseURL: "https://example-f9378-default-rtdb.firebaseio.com",
    projectId: "example-f9378",
    storageBucket: "example-f9378.appspot.com",
    messagingSenderId: "884013713798",
    appId: "1:884013713798:web:b86bb49da0b2b2d8fd0407",
    measurementId: "G-9NK3XDEKRE"
  };

  //for initialising firebase
  firebase.initializeApp(firebaseConfig);

  //reference for the database
 var formDB =  firebase.database().ref("form");

 document.getElementById('form').addEventListener('submit',submitForm);


 function submitForm(e){
    e.preventDefault();
    var email = getElementVal('email');
    var password = getElementVal('password');
   
    saveMessages(email,password);
    //enable alert
    document.querySelector('.alert').style.display = "block";
   
    //removing the alert after a timeout

    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
    },3000);
    document.getElementById("form").reset();
}

const saveMessages = (email, password ) =>{
    var newForm = formDB.push();
    newForm.set({
        email : email,
        password : password,

    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
