import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeboxPopComponent } from './freebox-pop.component';

describe('FreeboxPopComponent', () => {
  let component: FreeboxPopComponent;
  let fixture: ComponentFixture<FreeboxPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeboxPopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeboxPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
