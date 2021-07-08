import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSituationComponent } from './start-situation.component';

describe('StartSituationComponent', () => {
  let component: StartSituationComponent;
  let fixture: ComponentFixture<StartSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSituationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
