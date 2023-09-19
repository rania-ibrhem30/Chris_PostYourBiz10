import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailsPageComponent } from './listing-details-page.component';

describe('ListingDetailsPageComponent', () => {
  let component: ListingDetailsPageComponent;
  let fixture: ComponentFixture<ListingDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingDetailsPageComponent]
    });
    fixture = TestBed.createComponent(ListingDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
