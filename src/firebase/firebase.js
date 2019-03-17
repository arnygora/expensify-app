import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC2NzO06fKSr7isPpOhxOwFCZ02_MJrimE",
    authDomain: "expensify-78191.firebaseapp.com",
    databaseURL: "https://expensify-78191.firebaseio.com",
    projectId: "expensify-78191",
    storageBucket: "expensify-78191.appspot.com",
    messagingSenderId: "1064895740685"
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }

// database.ref('expenses')
//     .on('child_removed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val())
//     });
//
// database.ref('expenses')
//     .on('child_changed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val())
//     });
//
// database.ref('expenses')
//     .on('child_added', (snapshot) => {
//         console.log(snapshot.key, snapshot.val())
//     });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses)
//     });

// database.ref('expenses').push(
//     {
//         description: 'fish',
//         note: 'msdsdsdb',
//         amount: 545,
//         createdAt: 545321,
//     });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//
//     console.log(`Aloha dudes. I'm ${val.name}, WOrk a ${val.job.title} at ${val.job.company}`);
// });



