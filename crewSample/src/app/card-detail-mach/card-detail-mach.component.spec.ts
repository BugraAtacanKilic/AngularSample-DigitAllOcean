import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailMachComponent } from './card-detail-mach.component';

describe('CardDetailMachComponent', () => {
  let component: CardDetailMachComponent;
  let fixture: ComponentFixture<CardDetailMachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailMachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDetailMachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
