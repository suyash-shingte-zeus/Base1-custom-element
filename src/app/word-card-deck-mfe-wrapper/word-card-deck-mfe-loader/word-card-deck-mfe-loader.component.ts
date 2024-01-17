import { Component, OnInit } from '@angular/core';
import { MfeLoaderService } from 'src/app/services/mfe-loader.service';

@Component({
  selector: 'app-word-card-deck-mfe-loader',
  templateUrl: './word-card-deck-mfe-loader.component.html',
  styleUrls: ['./word-card-deck-mfe-loader.component.scss']
})
export class WordCardDeckMfeLoaderComponent implements OnInit {

  public newItem: any;
  public wordCardDecks = [
    {
      wordCardDeckName: 'Word Card Deck 1',
      wordCardList: [
        { name: 'Word Card 1.1' },
        { name: 'Word Card 1.2' },
      ],
    }
  ];

  constructor(private mfeLoaderService: MfeLoaderService) { }

  ngOnInit(): void {
    const loadRemoteScriptOptions = {
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './inject1',
      remoteName: 'mfe1App'
    }
    this.mfeLoaderService.loadMFE(loadRemoteScriptOptions).then(()=> {
      console.log('Loading MFE complete')
    })
  }


  onNewItemEvent($event: Event) {
    const eventFromMfe: any = $event;
    this.newItem = eventFromMfe.detail;
    console.log("new Item from MFE", this.newItem)
  }

}
