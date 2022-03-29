import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleImagePreviewComponent } from './multiple-image-preview.component';

describe('MultipleImagePreviewComponent', () => {
  let component: MultipleImagePreviewComponent;
  let fixture: ComponentFixture<MultipleImagePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleImagePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleImagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
