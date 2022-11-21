import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicspeakComponent } from './publicspeak.component';

describe('PublicspeakComponent', () => {
  let component: PublicspeakComponent;
  let fixture: ComponentFixture<PublicspeakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicspeakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicspeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
