import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RTLSComponent } from './rtls.component';

describe('RTLSComponent', () => {
  let component: RTLSComponent;
  let fixture: ComponentFixture<RTLSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RTLSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RTLSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
