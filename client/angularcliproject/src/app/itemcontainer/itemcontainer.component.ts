import { Component, Input } from '@angular/core';


interface Card {
  "name": string,
  "image": string,
  "info": string
}

@Component({
  selector: 'app-itemcontainer',
  templateUrl: './itemcontainer.component.html',
  styleUrls: ['./itemcontainer.component.scss']
})
export class ItemcontainerComponent {


  @Input()
  data!: Card;

}
