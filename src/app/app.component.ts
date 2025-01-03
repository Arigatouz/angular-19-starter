import {Component} from '@angular/core';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  imports: [
    MatGridList,
    MatGridTile
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-v19';
}
