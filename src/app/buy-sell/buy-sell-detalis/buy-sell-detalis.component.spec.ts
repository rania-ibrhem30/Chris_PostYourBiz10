import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySellDetalisComponent } from './buy-sell-detalis.component';

describe('BuySellDetalisComponent', () => {
  let component: BuySellDetalisComponent;
  let fixture: ComponentFixture<BuySellDetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuySellDetalisComponent]
    });
    fixture = TestBed.createComponent(BuySellDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
