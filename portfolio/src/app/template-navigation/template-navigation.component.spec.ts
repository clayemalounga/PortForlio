import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateNavigationComponent } from './template-navigation.component';

describe('TemplateNavigationComponent', () => {
  let component: TemplateNavigationComponent;
  let fixture: ComponentFixture<TemplateNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
