import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDetailsComponent } from './presupost-list.component';

describe('WebDetailsComponent', () => {
  let component: WebDetailsComponent;
  let fixture: ComponentFixture<WebDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
