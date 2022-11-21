import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicspeakingComponent } from './publicspeaking.component';

describe('PublicspeakingComponent', () => {
  let component: PublicspeakingComponent;
  let fixture: ComponentFixture<PublicspeakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicspeakingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicspeakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
