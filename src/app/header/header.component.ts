import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  @Output() selectedItem = new EventEmitter<string>()

  selctedNavItem(item : string){
    this.selectedItem.emit(item);
  }

}
