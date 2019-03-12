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

database.ref().set({
    name: 'Anton Rozdobudko',
    age: 30,
    stressLevel: 6,
    job: {
        title: 'SoftWare Dev',
        company: 'SPD'
    },
    location: {
        city: 'Cherkasy',
        country: 'Ukraine'
    }
}).then(() => {
    console.warn('success load data')
}).catch((e) => {
    console.log('This data is failed', e)
});

database.ref('isSingle').remove().then(() => {
    console.warn('Urrrrraaaaaaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!');
}).catch((e) => {
    console.error('You cannot add any values to data, because', e)
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seatle'
});
