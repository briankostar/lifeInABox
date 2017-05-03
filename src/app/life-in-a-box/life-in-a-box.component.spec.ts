import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeInABoxComponent } from './life-in-a-box.component';

describe('LifeInABoxComponent', () => {
  let component: LifeInABoxComponent;
  let fixture: ComponentFixture<LifeInABoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeInABoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeInABoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
