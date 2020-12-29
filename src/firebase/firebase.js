import firebase from 'firebase';
import { set } from 'numeral';

firebase.initializeApp({
  apiKey: "AIzaSyCgg8jnaEJGaosTjMjtrt1dnFvqpyF98jM",
    authDomain: "react-expensify-30190.firebaseapp.com",
    databaseURL: "https://react-expensify-30190-default-rtdb.firebaseio.com",
    projectId: "react-expensify-30190",
    storageBucket: "react-expensify-30190.appspot.com",
    messagingSenderId: "1050590346480",
    appId: "1:1050590346480:web:9b6776af07d0e066211635"
});

const database = firebase.database();

// only gets data once
// database.ref()
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(error => console.log(error));


//subscribes to changes 
const onValueChange = database.ref().on('value', snapshot => {
  const {name, job, company} = snapshot.val();
  // console.log(snapshot.val());
  console.log(`${name} is a ${job} at ${company}`);
});

// setTimeout(() => {
//   database.ref('name').set(28)
// }, 3000);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 3000);

// setTimeout(() => {
//   database.ref('name').set(28)
// }, 3000);

// database.ref().set({
//   name: 'Andrew Nead',
//   age: 20,
//   job: 'Software Developer',
//   isSingle: false,
//   location: {
//     city: 'Philidelphia',
//     country: 'United States',
//   }
// }).then(() => {
//   console.log('data set');
// }).catch(error => {
//   console.log(error);
// });

// database.ref('attributes').set({
//   height: 160,
// }).then(() => {
//   console.log('data set again');
// }).catch(error => {
//   console.log(error)
// });

// database.ref('isSingle').remove().then(() => {
//   console.log('removed');
// }).catch(error => console.log(error));

// database.ref().update({
//   name: 'Nathan',
//   age: 16,
//   'location/city':'Boston',
// });
