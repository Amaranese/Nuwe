import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegaloComponent } from './regalo.component';

describe('RegaloComponent', () => {
  let component: RegaloComponent;
  let fixture: ComponentFixture<RegaloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegaloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
