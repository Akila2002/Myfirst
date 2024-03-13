import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkiComponent } from './aki.component';

describe('AkiComponent', () => {
  let component: AkiComponent;
  let fixture: ComponentFixture<AkiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkiComponent]
    });
    fixture = TestBed.createComponent(AkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
