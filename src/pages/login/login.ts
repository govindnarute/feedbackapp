import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HomePage } from "../home/home";
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public http: HttpClient,public loadingCtrl: LoadingController,
  public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(value){
    let loading = this.loadingCtrl.create({
    content: ''
  });
  loading.present();
    this.http.post('https://eperformance.beacox.space:8080/MFeedback-New/mfb/feedbacklogin', value)
      .subscribe(
        res => {
          loading.dismiss();
          console.log(res);
           
          this.navCtrl.push(HomePage);
        },
        err => {
           loading.dismiss();
          console.log(err)
          let toast = this.toastCtrl.create({
      message: err.error.error.message,
      duration: 3000
    });
    toast.present();
        }
      );
  }

}
