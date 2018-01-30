import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedbackFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback-filter',
  templateUrl: 'feedback-filter.html',
})
export class FeedbackFilterPage {
  toUserName:boolean=false;
   fromUserName:boolean=false;
   isDateFilter:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackFilterPage');
  }
  closeMe(){
  this.navCtrl.pop()
}
isToUserNameClick(){
  
  if(this.toUserName){
    this.toUserName=false
    
  }else{
    this.toUserName=true
    
  }
}
isFromUserNameClick(){
  
  if(this.fromUserName){
    this.fromUserName=false
    
  }else{
    this.fromUserName=true
    
  }
}
isDateFilterClick(){
  
  if(this.isDateFilter){
    this.isDateFilter=false
    
  }else{
    this.isDateFilter=true
    
  }
}

}
