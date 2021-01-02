import firebase from 'firebase';

try {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID, 
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  });
} catch (err) {
  console.log(err);
}




const database = firebase.database();
// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
//   .on('value', snapshot => {
//     const expenses = [];
//     snapshot.forEach((expense) => {
//       expenses.push({
//         id: expense.key,
//         ...expense.val(),
//       })
//     });
//     console.log(expenses);
//   })


export default database;
export {firebase};
