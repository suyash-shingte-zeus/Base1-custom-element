import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCardDeckMfeLoaderComponent } from './word-card-deck-mfe-loader.component';

describe('WordCardDeckMfeLoaderComponent', () => {
  let component: WordCardDeckMfeLoaderComponent;
  let fixture: ComponentFixture<WordCardDeckMfeLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordCardDeckMfeLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordCardDeckMfeLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
