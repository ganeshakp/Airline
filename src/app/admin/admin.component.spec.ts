import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminComponent', () => {
    let component: AdminComponent;
    let fixture: ComponentFixture<AdminComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            declarations: [AdminComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should render a div with col-md-4 class', () => {
        const fixture = TestBed.createComponent(AdminComponent);
        fixture.detectChanges();
        const div: HTMLElement = fixture.nativeElement.querySelector('div');
        expect(div?.className).toContain('col-md-4');
    });
    it('should render a div with class col-md-8', () => {
        const fixture = TestBed.createComponent(AdminComponent);
        fixture.detectChanges();
        const div: HTMLElement[] = fixture.nativeElement.querySelectorAll('div');
        const innerdiv = div[1];
        expect(innerdiv?.className).toContain('col-md-8');
    });
});
