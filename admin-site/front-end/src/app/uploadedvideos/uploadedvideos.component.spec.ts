import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedvideosComponent } from './uploadedvideos.component';

describe('UploadedvideosComponent', () => {
  let component: UploadedvideosComponent;
  let fixture: ComponentFixture<UploadedvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadedvideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadedvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
