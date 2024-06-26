import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
})
export class ServerElementComponent {
  @Input('srvElement') element: { type: string; name: string; content: string };
}
