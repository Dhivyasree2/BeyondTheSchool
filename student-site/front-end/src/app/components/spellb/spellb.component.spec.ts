import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellbComponent } from './spellb.component';

describe('SpellbComponent', () => {
  let component: SpellbComponent;
  let fixture: ComponentFixture<SpellbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
