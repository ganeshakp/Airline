import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Passenger } from '../shared/passenger.model';
import { HttpClient } from '@angular/common/http';
import { StaffService } from '../shared/staff.service';
import { Flight } from '../shared/flight.model';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    flightIdChanged = new Subject<number>();
    flights: Flight[] = [];

    constructor(private http: HttpClient, private staffService: StaffService) {}

    modifyPassengerDetail(passengers: Passenger[], flightId: number) {
        return this.http.put<Passenger[]>(
            'https://angularproject-2e085-default-rtdb.firebaseio.com/flights/' +
                flightId +
                '/seats.json',
            passengers
        );
    }

    updateFlightServices(flight: Flight, flightId: number) {
        return this.http.put<Flight>(
            'https://angularproject-2e085-default-rtdb.firebaseio.com/flights/' +
                flightId +
                '.json',
            flight
        );
    }
}
