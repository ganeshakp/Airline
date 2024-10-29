import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlightsComponent } from './flights/flights.component';
import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';

@NgModule({
    declarations: [
        FlightsComponent,
        DropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent
    ],
    imports: [
        RouterModule.forChild([{ path: 'flights', component: FlightsComponent }]),
        FormsModule,
        CommonModule,
        HttpClientModule
    ],
    exports: [
        RouterModule,
        FormsModule,
        CommonModule,
        FlightsComponent,
        AlertComponent,
        DropdownDirective,
        LoadingSpinnerComponent,
        HttpClientModule
    ]
})
export class SharedModule {}
