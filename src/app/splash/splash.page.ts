import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html'
})
export class SplashPage {

  constructor(public viewCtrl: ModalController, public splashScreen: SplashScreen) { }

  ionViewDidEnter() {

    //this.splashScreen.hide();

    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 4000);

  }

}
