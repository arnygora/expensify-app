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

database.ref('expenses')
    .on('value', (snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        });
        console.log(expenses)
    });


// database.ref('expenses').push(
//     {
//         description: 'REnt',
//         note: '',
//         amount: 545,
//         createdAt: 545451321,
//     });


// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//
//     console.log(`Aloha dudes. I'm ${val.name}, WOrk a ${val.job.title} at ${val.job.company}`);
// });

// database.ref().set({
//     name: 'Anton Rozdobudko',
//     age: 30,
//     stressLevel: 6,
//     job: {
//         title: 'SoftWare Dev',
//         company: 'SPD'
//     },
//     location: {
//         city: 'Cherkasy',
//         country: 'Ukraine'
//     }
// });
//
//
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle'
// }).then(() => (
//     console.log('uraaaa')
// )).catch((e) => (
//     console.log('errrroriina', e)
// ));
