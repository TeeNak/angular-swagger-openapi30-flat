import { Component } from '@angular/core';
import { FileItemService } from '../swagger-generated';
import { Item } from '../models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foo-swagger';

  items: Item[] = [];

  constructor(
    private fileItemService: FileItemService
  ) {

  }

  onButtonTestClick() {
    alert('aaa');
    this.fileItemService.apiFileItemGet()
      .subscribe((items: Item[]) => {
        this.items = items
      })
  }
}
