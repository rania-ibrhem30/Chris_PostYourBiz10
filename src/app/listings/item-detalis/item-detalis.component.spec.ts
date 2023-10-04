import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetalisComponent } from './item-detalis.component';

describe('ItemDetalisComponent', () => {
  let component: ItemDetalisComponent;
  let fixture: ComponentFixture<ItemDetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDetalisComponent]
    });
    fixture = TestBed.createComponent(ItemDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
