import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkilaComponent } from './akila.component';

describe('AkilaComponent', () => {
  let component: AkilaComponent;
  let fixture: ComponentFixture<AkilaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkilaComponent]
    });
    fixture = TestBed.createComponent(AkilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
