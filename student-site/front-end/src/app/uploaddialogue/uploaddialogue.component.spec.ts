import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaddialogueComponent } from './uploaddialogue.component';

describe('UploaddialogueComponent', () => {
  let component: UploaddialogueComponent;
  let fixture: ComponentFixture<UploaddialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploaddialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploaddialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
