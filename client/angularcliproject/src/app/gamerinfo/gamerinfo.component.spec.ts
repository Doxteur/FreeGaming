import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerinfoComponent } from './gamerinfo.component';

describe('GamerinfoComponent', () => {
  let component: GamerinfoComponent;
  let fixture: ComponentFixture<GamerinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamerinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
