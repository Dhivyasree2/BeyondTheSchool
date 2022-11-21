import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkingonsiComponent } from './talkingonsi.component';

describe('TalkingonsiComponent', () => {
  let component: TalkingonsiComponent;
  let fixture: ComponentFixture<TalkingonsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalkingonsiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalkingonsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
