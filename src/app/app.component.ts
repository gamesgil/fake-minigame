import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 clicked: number[] = [];

  title = 'ttt';

  onClick(idx: number) {
    if (!this.isClicked(idx)) {
      this.clicked.push(idx)
    }

    console.log(this.clicked)
    }

    isClicked(idx: number) {
      return this.clicked.indexOf(idx) > -1
    }

    isWinner(idx: number) {
      return  (this.clicked.indexOf(idx) === 3);
      }
       
}
