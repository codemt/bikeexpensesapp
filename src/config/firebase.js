import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCYIJ9Q86MPtI4TBB7J_YAevSoVYQwL8jU",
    authDomain: "exampleloginandcrudapp.firebaseapp.com",
    databaseURL: "https://exampleloginandcrudapp.firebaseio.com",
    projectId: "exampleloginandcrudapp",
    storageBucket: "exampleloginandcrudapp.appspot.com",
    messagingSenderId: "649988538754"
  };
  
firebase.initializeApp(config);

 const database = firebase.database();


 export { firebase , database as default };