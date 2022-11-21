import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksoncurrComponent } from './talksoncurr.component';

describe('TalksoncurrComponent', () => {
  let component: TalksoncurrComponent;
  let fixture: ComponentFixture<TalksoncurrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalksoncurrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalksoncurrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
