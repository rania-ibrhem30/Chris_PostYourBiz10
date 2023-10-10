import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarworkComponent } from './similarwork.component';

describe('SimilarworkComponent', () => {
  let component: SimilarworkComponent;
  let fixture: ComponentFixture<SimilarworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimilarworkComponent]
    });
    fixture = TestBed.createComponent(SimilarworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
