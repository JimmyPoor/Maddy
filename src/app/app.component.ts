import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  outerCounterValue = 0;
}


// export interface IAlert {
//   id: number;
//   type: string;
//   message: string;
// }


// @Input()
//   public alerts: Array<IAlert> = [];

//   constructor() {
//     this.alerts.push({
//       id: 1,
//       type: 'success',
//       message: 'This is an success alert',
//     }, {
//         id: 2,
//         type: 'info',
//         message: 'This is an info alert',
//       });
//   }

//   closeAlert(alert: IAlert): void {
//     const index: number = this.alerts.indexOf(alert);
//     this.alerts.splice(index, 1);
//   }
