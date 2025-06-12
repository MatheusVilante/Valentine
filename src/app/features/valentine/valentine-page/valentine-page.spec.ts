import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentinePage } from './valentine-page';

describe('ValentinePage', () => {
  let component: ValentinePage;
  let fixture: ComponentFixture<ValentinePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValentinePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValentinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
