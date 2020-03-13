import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingCartComponent } from './shoppingcart.component';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDividerModule } from '@angular/material/divider';


describe('ShoppingcartComponent', () => {
    let component: ShoppingCartComponent;
    let fixture: ComponentFixture<ShoppingCartComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatCardModule,
                MatDividerModule,
                RouterTestingModule
            ],
            declarations: [ShoppingCartComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShoppingCartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
