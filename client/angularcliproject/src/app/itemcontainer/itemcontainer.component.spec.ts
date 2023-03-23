import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcontainerComponent } from './itemcontainer.component';

describe('ItemcontainerComponent', () => {
  let component: ItemcontainerComponent;
  let fixture: ComponentFixture<ItemcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
