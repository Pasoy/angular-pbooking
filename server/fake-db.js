const Rental = require('./models/rental');

class FakeDB {

    constructor() {
        this.rentals = [{
            id: '1',
            title: 'Ya friends home',
            city: 'Vienna',
            street: 'Königstraße',
            category: 'house',
            image: 'https://via.placeholder.com/350x250',
            bedrooms: 2,
            description: 'Ye, its pretty coo',
            dailyRate: 15,
            shared: false,
            createdAt: '08/01/2019'
        },
        {
            id: '2',
            title: 'Ya dads home',
            city: 'Vienna',
            street: 'Wienerstraße',
            category: 'house',
            image: 'https://via.placeholder.com/350x250',
            bedrooms: 1,
            description: 'Yaaaaw, its pretty coo',
            dailyRate: 34,
            shared: false,
            createdAt: '09/01/2019'
        },
        {
            id: '3',
            title: 'Ya mums home',
            city: 'Vienna',
            street: 'Holzlstraße',
            category: 'house',
            image: 'https://via.placeholder.com/350x250',
            bedrooms: 4,
            description: 'We hawt',
            dailyRate: 27,
            shared: false,
            createdAt: '10/01/2019'
        },
        {
            id: '4',
            title: 'Ya sisters apartment',
            city: 'Vienna',
            street: 'Wecoogasse',
            category: 'apartment',
            image: 'https://via.placeholder.com/350x250',
            bedrooms: 2,
            description: 'Ye, its hawt',
            dailyRate: 17,
            shared: true,
            createdAt: '11/01/2019'
        }]
    }

    async cleanDB() {
        await Rental.remove({});
    }

    pushRentalsToDB() {
        this.rentals.forEach((rental) => {
            const newRental = new Rental(rental);

            newRental.save();
        });
    }

    seedDB() {
        this.cleanDB();
        this.pushRentalsToDB();
    }

}


module.exports = FakeDB;
