import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardComponentComponent } from './post-card-component.component';

describe('PostCardComponentComponent', () => {
  let component: PostCardComponentComponent;
  let fixture: ComponentFixture<PostCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
