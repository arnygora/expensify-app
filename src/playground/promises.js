const promise = new Promise((resolve, reject) => {
    reject('Шось пішло не так')
});

promise.then((data) => {
    console.log(data)
}).catch((error) => (
    console.warn('errorina: ', error)
));

// або так
// promise.then((data) => {
//     console.log(data)
// }, (error) => (
//     console.warn('errorina: ', error)
// ));

