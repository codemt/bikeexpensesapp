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
// set a value in the firebase database
database.ref().set({

        name : 'Mithilesh Tarkar',
        age : 26,
        isSingle :  true,
        location : {
            city : 'mumbai',
            state : 'Maharashtra',
            'country': 'India'
        }

})

// update database
database.ref('age').set(25);
database.ref('location/city').set('vikhroli');


// add attribute with 1 child
database.ref('profession').set('artist/engineer');

// add attribute with 2 child
database.ref('qualication').set({

        degree : 'BCOM',
        postgraduation : 'MCA'


})

// remove a attribuate
database.ref('isSingle').remove()
.then(() => {

    console.log('removed item');

}).catch((err) =>{

    console.log('some error ocurred');

})


// update database , also you create new attribute
// doesnt update nested data objects
// to update nested data objects use slashes '/'
database.ref().update({


        name : 'Mike',
        age : 29,
        hobbies : 'Music and Coding',
        'location/city':'powai'


});

// connect with firebase database and get all data.
database.ref()
.once('value')
.then((snapshot) => {

        const val = snapshot.val();
        console.log(val);
        console.log('His name is'+val.name+'and his age is'+val.age);
})

// get specific data object from firebase
database.ref('name')
.once('value')
.then((snapshot) => {


        console.log(snapshot.val()); 

})


// keep listening to database for changes
// if any change hapeens , the function will be called again.
database.ref().on('value',  (snapshot) => {


            console.log(snapshot.val());
            

}, (e)=>{

        console.log('something happend' , e);

});

// stop subscription.
setTimeout(()=>{


        database.ref().off();

},5000)


