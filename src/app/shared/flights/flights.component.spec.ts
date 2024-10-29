import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsComponent } from './flights.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FlightsComponent', () => {
  let component: FlightsComponent;
  let fixture: ComponentFixture<FlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [FlightsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selectedflightid as the index parameter', () => {
    component.onFlightSelect(1);
    expect(component.selectedFlightId).toEqual(1);
  });
  it('should render list of flights depending upon number of flights', () => {
    component.flights = [
      {
        ancillaryServicesProvided: ['Sandwiches', 'Snacks', 'Test 1'],
        arrival: 'Banglore',
        arrivalTime: new Date(),
        departure: 'Chennai',
        departureTime: new Date(),
        mealsProvided: ['Special Meals', 'Standard Meals', 'test'],
        name: 'Flight A',
        seats: [],
        shoppingItemsProvided: ['Perfume', 'Chocolates']
      }
    ];
    fixture.detectChanges();
    const aTag: HTMLElement[] = fixture.nativeElement.querySelectorAll('a');
    expect(aTag.length).toEqual(1);
  });
  it('shouldn\'t render flight list if there are no flights', () => {
    component.flights = [];
    fixture.detectChanges();
    const aTag: HTMLElement[] = fixture.nativeElement.querySelectorAll('a');
    expect(aTag.length).toEqual(0);
  });
});