export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Production-ready',
            author: 'L.F Bob',
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: 'Release it!',
            author: 'Someone',
            price: 25,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
        }
    ];

    getBooks() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(this.data);
                rej(new Error('Something wrong...'));
            }, 700);
        });
    };
}
