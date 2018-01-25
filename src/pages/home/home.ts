import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public menuCtrl:MenuController,public loadingCtrl: LoadingController) {

  }
ionViewWillEnter() { 
  //this.navCtrl.setRoot(HomePage); 
  //this.navCtrl.popToRoot();
  
}
}
