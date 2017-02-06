import { Component } from '@angular/core';
import { ColorUtilities } from '@kolory/color-utilities/src/library';


@Component({
  selector: 'my-app',
  templateUrl: '../src/app/app.component.html'
})
export class AppComponent  { 
    color = ''; 

    rgbInputErrMsg = '';
    hexInputErrMsg = '';

    getColor(){ return this.color; }

    setHexColor(hex:string){
        const colorUtil = new ColorUtilities();

        if (hex.length == 0){
            this.hexInputErrMsg = '';
        } else if (hex.length > 0 && !colorUtil.isValidHexColor(hex)){
            this.hexInputErrMsg = "Wrong HEX format";
            return;
        }

        this.color = hex;
    }

    setRgbColor(rgb:string){
        const colorUtil = new ColorUtilities();

        if (rgb.length == 0){
            this.rgbInputErrMsg = '';
        } else if (rgb.length > 0 && !colorUtil.isValidRgbColor(rgb)){
            this.rgbInputErrMsg = "Wrong RGB format";
            return;
        }

        this.color = rgb;
    }
}
