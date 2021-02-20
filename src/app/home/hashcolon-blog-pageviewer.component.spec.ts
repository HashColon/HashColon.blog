import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashcolonBlogPageviewerComponent } from './hashcolon-blog-pageviewer.component';

describe('HashcolonBlogPageviewerComponent', () => {
  let component: HashcolonBlogPageviewerComponent;
  let fixture: ComponentFixture<HashcolonBlogPageviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashcolonBlogPageviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashcolonBlogPageviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
