import { Component } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
})
export class MyAccountComponent {
  selected: string = 'profile';

  updateComponent(view: string) {
    this.selected = view;
  }
}
