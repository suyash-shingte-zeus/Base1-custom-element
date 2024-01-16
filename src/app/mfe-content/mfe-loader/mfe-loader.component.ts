import { Component, OnInit } from '@angular/core';
import { MfeLoaderService } from 'src/app/services/mfe-loader.service';

@Component({
  selector: 'app-mfe-loader',
  templateUrl: './mfe-loader.component.html',
  styleUrls: ['./mfe-loader.component.scss']
})
export class MfeLoaderComponent implements OnInit {


  public newItem: any;
  public wordCardDecks = [
    {
      wordCardDeckName: 'Word Card Deck 1',
      wordCardList: [
        { name: 'Word Card 1.1' },
        { name: 'Word Card 1.2' },
      ],
    },
    {
      wordCardDeckName: 'Word Card Deck 2',
      wordCardList: [
        { name: 'Word Card 2.1' },
        { name: 'Word Card 2.2' },
      ],
    },
  ];
  
  public flashCardDecks = [
    {
      flashCardDeckName: 'Flash Card Deck 1',
      flashCardList: [
        { name: 'Flash Card 1.1' },
        { name: 'Flash Card 1.2' },
      ],
    },
    {
      flashCardDeckName: 'Flash Card Deck 2',
      flashCardList: [
        { name: 'Flash Card 2.1' },
        { name: 'Flash Card 2.2' },
      ],
    },
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
