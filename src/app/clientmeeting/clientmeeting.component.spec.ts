import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmeetingComponent } from './clientmeeting.component';

describe('ClientmeetingComponent', () => {
  let component: ClientmeetingComponent;
  let fixture: ComponentFixture<ClientmeetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientmeetingComponent]
    });
    fixture = TestBed.createComponent(ClientmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
