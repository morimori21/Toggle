import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public title:string='Ninja is not your slave';
  public isBold: boolean=false;
  public isItalic: boolean=false;
  public isGreen:boolean=false;
  public withBG : boolean = false;
  public isWithStyleBind: boolean= true;
  public message: any;

  public styleSetA:any = {
    fontSize: '30px',
    textAlign: 'center',
    padding: '30px',
  };

  public styleSetB: any = {};

  public bg: any = {
    withBackground: this.withBG,
  };

  public classes: any = {
    bold: this.isBold,
    italic: this.isItalic,
    green: this.isGreen,
  };

  public toggleBold() {
    this.isBold ? (this.isBold = false) : (this.isBold = true);
    this.update();
  }

  public toggleItalic() {
    this.isItalic ? (this.isItalic = false) : (this.isItalic = true);
    this.update();
  }

  public toggleRed() {
    this.isGreen ? (this.isGreen = false) : (this.isGreen = true);
    this.update();
  }

  public toggleBG() {
    this.withBG ? (this.withBG = false) : (this.withBG = true);
    this.update();
  }

  public toggleStyleBinding() {
    this.isWithStyleBind ? (this.isWithStyleBind = false) : (this.isWithStyleBind = true);
    this.update();
  }

  private update() {
    this.classes = {
      bold: this.isBold,
      italic: this.isItalic,
      green: this.isGreen,
    };
    this.bg = {
      withBackground: this.withBG,
    };
  }

  public popup(inputContent: any) {
    this.message = `${inputContent} 💢 ! "${this.title}"`;
  }



  ngOnInit(): void {}
}
