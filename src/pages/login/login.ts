import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HomePage } from "../home/home";
import { ToastController } from 'ionic-angular';
import { APIConstant } from "../../constant/constant";
import { Storage } from '@ionic/storage';



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
  public toastCtrl: ToastController,private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(value){
    let loading = this.loadingCtrl.create({
    content: ''
  });
  loading.present();

    this.http.post(APIConstant.serviceUrl+APIConstant.loginUrl, value)
      .subscribe(
        res => {
          loading.dismiss();
          console.log(res);
           this.storage.set('userDetails', res);
           this.storage.get('userDetails').then(data=>{
             console.log(data.object.authToken)
           })
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
