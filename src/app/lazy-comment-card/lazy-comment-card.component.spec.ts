import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyCommentCardComponent } from './lazy-comment-card.component';

describe('LazyCommentCardComponent', () => {
  let component: LazyCommentCardComponent;
  let fixture: ComponentFixture<LazyCommentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyCommentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyCommentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
