import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSidebarComponent } from './message-sidebar.component';

describe('MessageSidebarComponent', () => {
  let component: MessageSidebarComponent;
  let fixture: ComponentFixture<MessageSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageSidebarComponent]
    });
    fixture = TestBed.createComponent(MessageSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
