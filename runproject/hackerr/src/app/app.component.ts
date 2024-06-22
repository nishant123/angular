import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Currency Converter";

  yenValue: number = null;
  usdValue: number = null;

  onUsdValueChange(value) {
this.usdValue = value;
  }

  onYenValueChange(value) {
this.yenValue = value;
  }
}
