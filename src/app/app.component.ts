import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutsComponent } from "./components/layouts/layouts.component";
import { DragndropwallboarbComponent } from "./components/dragndropwallboarb/dragndropwallboarb.component";
import { DragndropskinComponent } from "./components/dragndropskin/dragndropskin.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutsComponent, DragndropwallboarbComponent, DragndropskinComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatwidget';
}
