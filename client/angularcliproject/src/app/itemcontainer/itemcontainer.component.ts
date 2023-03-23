import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-itemcontainer',
  templateUrl: './itemcontainer.component.html',
  styleUrls: ['./itemcontainer.component.scss']
})
export class ItemcontainerComponent {


  @Input() data: [] | undefined;
}
