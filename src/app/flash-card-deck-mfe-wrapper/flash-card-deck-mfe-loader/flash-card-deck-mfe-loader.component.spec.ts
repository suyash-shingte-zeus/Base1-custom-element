import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardDeckMfeLoaderComponent } from './flash-card-deck-mfe-loader.component';

describe('FlashCardDeckMfeLoaderComponent', () => {
  let component: FlashCardDeckMfeLoaderComponent;
  let fixture: ComponentFixture<FlashCardDeckMfeLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashCardDeckMfeLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashCardDeckMfeLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
