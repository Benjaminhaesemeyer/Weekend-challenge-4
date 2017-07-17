import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation', [
      state('inactive', style({
      backgroundColor: 'red'
      })),
      state('active', style({
      backgroundColor: 'blue'
      }))
    ])
  ]
})
export class AppComponent {

animationState ='inactive';

animate() {

this.animationState = (this.animationState === 'inactive' ? 'active' : 'inactive');
}


}
