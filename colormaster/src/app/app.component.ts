/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { ColorUtilities } from '@kolory/color-utilities/src/library';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
    public rgbInputErrMsg = '';
    public hexInputErrMsg = '';

    private color = '';

    public getColor() { return this.color; }

    public setHexColor(hex: string) {
        const colorUtil = new ColorUtilities();

        if (hex.length === 0) {
            this.hexInputErrMsg = '';
        } else if (hex.length > 0 && !colorUtil.isValidHexColor(hex)) {
            this.hexInputErrMsg = 'Wrong HEX format';
            return;
        }

        this.color = hex;
    }

    public setRgbColor(rgb: string) {
        const colorUtil = new ColorUtilities();

        if (rgb.length === 0) {
            this.rgbInputErrMsg = '';
        } else if (rgb.length > 0 && !colorUtil.isValidRgbColor(rgb)) {
            this.rgbInputErrMsg = 'Wrong RGB format';
            return;
        }

        this.color = rgb;
    }

  /*public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }*/

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
