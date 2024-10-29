import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersComponent } from './passengers.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PassengerFilterPipe } from './passenger-filter.pipe';
import { FormsModule } from '@angular/forms';

describe('PassengersComponent', () => {
    let component: PassengersComponent;
    let fixture: ComponentFixture<PassengersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
            declarations: [PassengersComponent, PassengerFilterPipe]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PassengersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
