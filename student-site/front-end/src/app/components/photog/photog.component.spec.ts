import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotogComponent } from './photog.component';

describe('PhotogComponent', () => {
  let component: PhotogComponent;
  let fixture: ComponentFixture<PhotogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
