import { AlertController } from "@ionic/angular";
import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  handleButtonClick() {
    this.alertController
      .create({
        cssClass: "my-custom-class",
        header: "For download the file",
        message: "Please register your email",
        buttons: ["Disagree", "Log in", "Register"],
        mode: "ios"
      })
      .then(alert => {
        alert.present();
      });
  }
}
