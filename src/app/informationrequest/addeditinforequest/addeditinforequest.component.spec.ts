import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditinforequestComponent } from './addeditinforequest.component';

describe('AddeditinforequestComponent', () => {
  let component: AddeditinforequestComponent;
  let fixture: ComponentFixture<AddeditinforequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditinforequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditinforequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
