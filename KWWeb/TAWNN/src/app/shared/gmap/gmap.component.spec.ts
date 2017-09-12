import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmapComponent } from './gmap.component';

describe('MapComponent', () => {
  let component: GmapComponent;
  let fixture: ComponentFixture<GmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be visible by default', () => {
    // Arrange
    const element = fixture.nativeElement;
    const div = element.querySelectorAll('div')[0];

    // Assert
    expect(div.getAttribute('hidden')).toBeNull();
  });

  it('should not be visible when app is loading', () => {
    // Arrange
    const element = fixture.nativeElement;
    const div = element.querySelectorAll('div')[0];

    // Act
    fixture.componentInstance.isLoading = true;
    fixture.detectChanges();

    // Assert
    expect(div.getAttribute('hidden')).not.toBeNull();
  });
});
