import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
