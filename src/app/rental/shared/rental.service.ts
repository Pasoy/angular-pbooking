import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Rental} from './rental.module';

@Injectable()
export class RentalService {

    private rentals: Rental[] = [
        {
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
            street: 'Königstraße',
            category: 'house',
            image: 'https://via.placeholder.com/350x250',
            bedrooms: 1,
            description: 'Ye, its pretty coo',
            dailyRate: 34,
            shared: false,
            createdAt: '09/01/2019'
        },
        {
            id: '3',
            title: 'Ya mums home',
            city: 'Vienna',
            street: 'Königstraße',
            category: 'house',
            image: 'https://via.placeholder.com/350x250',
            bedrooms: 4,
            description: 'Ye, its pretty coo',
            dailyRate: 27,
            shared: false,
            createdAt: '10/01/2019'
        },
        {
            id: '4',
            title: 'Ya sisters home',
            city: 'Vienna',
            street: 'Königstraße',
            category: 'house',
            image: 'https://via.placeholder.com/350x250',
            bedrooms: 2,
            description: 'Ye, its pretty coo',
            dailyRate: 17,
            shared: true,
            createdAt: '11/01/2019'
        },
    ];


    public getRentalById(rentalId: string): Observable<Rental> {
        return new Observable<Rental>((observer) => {

            setTimeout(() => {
                const foundRental = this.rentals.find((rental) => {
                    return rental.id === rentalId;
                });

                observer.next(foundRental);
            }, 500);

        });
    }

    public getRentals(): Observable<Rental[]> {
        return new Observable<Rental[]>((observer) => {

            setTimeout(() => {
                observer.next(this.rentals);
            }, 1000);

        });
    }

}
