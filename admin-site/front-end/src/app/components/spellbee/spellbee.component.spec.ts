import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellbeeComponent } from './spellbee.component';

describe('SpellbeeComponent', () => {
  let component: SpellbeeComponent;
  let fixture: ComponentFixture<SpellbeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellbeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellbeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
