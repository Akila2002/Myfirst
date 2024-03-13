import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  @Output() dataToParent = new EventEmitter<string>();

  sendDataToParent() {
    let data = 'Good afternoon Pooja';
    this.dataToParent.emit(data);
  }
}
