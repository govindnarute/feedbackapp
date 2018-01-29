import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedbackDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback-details',
  templateUrl: 'feedback-details.html',
})
export class FeedbackDetailsPage {
  feedbackData:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.data)
    this.feedbackData=this.navParams.data.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackDetailsPage');
  }

ionViewWillEnter() { 
  console.log(this.navParams.data.data)
this.feedbackData=this.navParams.data.data

}
closeMe(){
  this.navCtrl.pop()
}
}
