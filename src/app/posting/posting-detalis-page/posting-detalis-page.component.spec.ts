import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingDetalisPageComponent } from './posting-detalis-page.component';

describe('PostingDetalisPageComponent', () => {
  let component: PostingDetalisPageComponent;
  let fixture: ComponentFixture<PostingDetalisPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostingDetalisPageComponent]
    });
    fixture = TestBed.createComponent(PostingDetalisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
