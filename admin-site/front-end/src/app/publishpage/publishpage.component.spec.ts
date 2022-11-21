import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishpageComponent } from './publishpage.component';

describe('PublishpageComponent', () => {
  let component: PublishpageComponent;
  let fixture: ComponentFixture<PublishpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
