const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
         // name: 'pinguin'
    }
};

const { title, author } = book;
const { name: publisherName = 'Self-Publisher' } = book.publisher;

document.write(`I'm recomend you to read '${title}' by ${author} <br/>
It was printed by "${publisherName}"<br/>`);

const item = ['coffee (hot)', '$2.00', '$3.00', '$4.00'];

const [coffee, , price] = item;

document.write(`A medium ${coffee} costs ${price} `);