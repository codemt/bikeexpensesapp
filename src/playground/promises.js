// promise can only be resolved once.
// promise.then can only take one argument
// promise can only be rejected once.
// used for asynchronous operations

const promise = new Promise((resolve,reject) => { 


        setTimeout(() => {

            resolve('promise resolved');

        },2000);

});

console.log('before');


promise.then((data) => {

    console.log(data);

}).catch((error) => {

        console.log(error);

});

console.log('after');

