import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController, LoadingController } from 'ionic-angular';
import { ToastController, ModalController } from 'ionic-angular';
import { APIConstant } from "../../constant/constant";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { FeedbackDetailsPage } from "../feedback-details/feedback-details";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  feedbackData:any
  //feedBackResult=[{"ufId":3,"fromUserId":64,"toUserId":5,"feedbackTime":"2018-01-16 15:17:50.709","feedbackText":"This is sample feedback text","subcategoryId":6,"isDeleted":false,"addedBy":64,"type":"positive","toUid":5,"toName":"Rohit Kumbhar","addedByUserId":64,"addedByName":"Vish S","scId":6,"scCategoryId":3,"subCategoryName":"poor","isSubCategoryDeleted":false,"categoryId":3,"categoryName":"code quality","companyId":1,"isCategoryDeleted":false,"fromUId":64,"fromUserName":"Vish S"},{"ufId":4,"fromUserId":64,"toUserId":5,"feedbackTime":"2018-01-16 15:17:50.709","feedbackText":"Edited This is sample feedback text","subcategoryId":6,"lastEditedTime":"2018-01-16 15:46:19.233","isDeleted":false,"addedBy":64,"type":"negative","toUid":5,"toName":"Rohit Kumbhar","addedByUserId":64,"addedByName":"Vish S","scId":6,"scCategoryId":3,"subCategoryName":"poor","isSubCategoryDeleted":false,"categoryId":3,"categoryName":"code quality","companyId":1,"isCategoryDeleted":false,"fromUId":64,"fromUserName":"Vish S"},{"ufId":18,"fromUserId":4,"toUserId":23,"feedbackTime":"2018-01-24 05:31:33.734","feedbackText":"Good work.","subcategoryId":5,"lastEditedTime":"2018-01-29 07:05:06.87","isDeleted":false,"addedBy":64,"type":"Positive","toUid":23,"toName":"Rushikesh Salunke","addedByUserId":64,"addedByName":"Vish S","scId":5,"scCategoryId":3,"subCategoryName":"good","isSubCategoryDeleted":false,"categoryId":3,"categoryName":"code quality","companyId":1,"isCategoryDeleted":false,"fromUId":4,"fromUserName":"Deepak Kumbhar"},{"ufId":10,"fromUserId":23,"toUserId":5,"feedbackTime":"2018-01-22 10:59:10.787","feedbackText":"feedback message","subcategoryId":3,"isDeleted":false,"addedBy":64,"type":"negative","toUid":5,"toName":"Rohit Kumbhar","addedByUserId":64,"addedByName":"Vish S","scId":3,"scCategoryId":2,"subCategoryName":"fast","isSubCategoryDeleted":false,"categoryId":2,"categoryName":"work","companyId":1,"isCategoryDeleted":false,"fromUId":23,"fromUserName":"Rushikesh Salunke"},{"ufId":17,"fromUserId":5,"toUserId":4,"feedbackTime":"2018-01-23 15:56:44.511","feedbackText":"feedback text for testing category","subcategoryId":3,"isDeleted":false,"addedBy":64,"type":"positive","toUid":4,"toName":"Deepak Kumbhar","addedByUserId":64,"addedByName":"Vish S","scId":3,"scCategoryId":2,"subCategoryName":"fast","isSubCategoryDeleted":false,"categoryId":2,"categoryName":"work","companyId":1,"isCategoryDeleted":false,"fromUId":5,"fromUserName":"Rohit Kumbhar"},{"ufId":11,"fromUserId":5,"toUserId":23,"feedbackTime":"2018-01-22 11:14:11.601","feedbackText":"testing feedback","subcategoryId":3,"isDeleted":false,"addedBy":64,"type":"negative","toUid":23,"toName":"Rushikesh Salunke","addedByUserId":64,"addedByName":"Vish S","scId":3,"scCategoryId":2,"subCategoryName":"fast","isSubCategoryDeleted":false,"categoryId":2,"categoryName":"work","companyId":1,"isCategoryDeleted":false,"fromUId":5,"fromUserName":"Rohit Kumbhar"},{"ufId":1,"fromUserId":4,"toUserId":5,"feedbackTime":"2018-01-16 15:10:03.854","feedbackText":"This is sample feedback text","subcategoryId":3,"isDeleted":false,"addedBy":64,"type":"positive","toUid":5,"toName":"Rohit Kumbhar","addedByUserId":64,"addedByName":"Vish S","scId":3,"scCategoryId":2,"subCategoryName":"fast","isSubCategoryDeleted":false,"categoryId":2,"categoryName":"work","companyId":1,"isCategoryDeleted":false,"fromUId":4,"fromUserName":"Deepak Kumbhar"},{"ufId":12,"fromUserId":5,"toUserId":23,"feedbackTime":"2018-01-22 11:17:30.34","feedbackText":"testing feedback","subcategoryId":3,"isDeleted":false,"addedBy":64,"type":"negative","toUid":23,"toName":"Rushikesh Salunke","addedByUserId":64,"addedByName":"Vish S","scId":3,"scCategoryId":2,"subCategoryName":"fast","isSubCategoryDeleted":false,"categoryId":2,"categoryName":"work","companyId":1,"isCategoryDeleted":false,"fromUId":5,"fromUserName":"Rohit Kumbhar"},{"ufId":5,"fromUserId":5,"toUserId":25,"feedbackTime":"2018-01-19 16:16:59.764","feedbackText":"this feedback is given by sagar from portal","subcategoryId":3,"isDeleted":false,"addedBy":64,"type":"positive","toUid":25,"toName":"Sagar Panda","addedByUserId":64,"addedByName":"Vish S","scId":3,"scCategoryId":2,"subCategoryName":"fast","isSubCategoryDeleted":false,"categoryId":2,"categoryName":"work","companyId":1,"isCategoryDeleted":false,"fromUId":5,"fromUserName":"Rohit Kumbhar"},{"ufId":13,"fromUserId":23,"toUserId":5,"feedbackText":"testing feedback updating feedback type","subcategoryId":3,"lastEditedTime":"2018-01-22 14:25:26.537","isDeleted":false,"addedBy":64,"type":"positive","toUid":5,"toName":"Rohit Kumbhar","addedByUserId":64,"addedByName":"Vish S","scId":3,"scCategoryId":2,"subCategoryName":"fast","isSubCategoryDeleted":false,"categoryId":2,"categoryName":"work","companyId":1,"isCategoryDeleted":false,"fromUId":23,"fromUserName":"Rushikesh Salunke"},{"ufId":6,"fromUserId":25,"toUserId":5,"feedbackTime":"2018-01-19 16:18:33.89","feedbackText":"this feedback is for rohit from portal","subcategoryId":3,"isDeleted":false,"addedBy":64,"type":"positive","toUid":5,"toName":"Rohit Kumbhar","addedByUserId":64,"addedByName":"Vish S","scId":3,"scCategoryId":2,"subCategoryName":"fast","isSubCategoryDeleted":false,"categoryId":2,"categoryName":"work","companyId":1,"isCategoryDeleted":false,"fromUId":25,"fromUserName":"Sagar Panda"},{"ufId":14,"fromUserId":5,"toUserId":23,"feedbackText":"testing feedback1","subcategoryId":3,"lastEditedTime":"2018-01-22 14:23:31.482","isDeleted":false,"addedBy":64,"type":"positive","toUid":23,"toName":"Rushikesh Salunke","addedByUserId":64,"addedByName":"Vish S","scId":3,"scCategoryId":2,"subCategoryName":"fast","isSubCategoryDeleted":false,"categoryId":2,"categoryName":"work","companyId":1,"isCategoryDeleted":false,"fromUId":5,"fromUserName":"Rohit Kumbhar"},{"ufId":7,"fromUserId":25,"toUserId":5,"feedbackText":"text changed","subcategoryId":3,"lastEditedTime":"2018-01-22 14:23:00.811","isDeleted":false,"addedBy":64,"type":"positive","toUid":5,"toName":"Rohit Kumbhar","addedByUserId":64,"addedByName":"Vish S","scId":3,"scCategoryId":2,"subCategoryName":"fast","isSubCategoryDeleted":false,"categoryId":2,"categoryName":"work","companyId":1,"isCategoryDeleted":false,"fromUId":25,"fromUserName":"Sagar Panda"},{"ufId":15,"fromUserId":25,"toUserId":4,"feedbackTime":"2018-01-22 15:05:05.57","feedbackText":"feedback","subcategoryId":3,"isDeleted":false,"addedBy":64,"type":"negative","toUid":4,"toName":"Deepak Kumbhar","addedByUserId":64,"addedByName":"Vish S","scId":3,"scCategoryId":2,"subCategoryName":"fast","isSubCategoryDeleted":false,"categoryId":2,"categoryName":"work","companyId":1,"isCategoryDeleted":false,"fromUId":25,"fromUserName":"Sagar Panda"},{"ufId":8,"fromUserId":25,"toUserId":5,"feedbackText":"feedback text.","subcategoryId":3,"lastEditedTime":"2018-01-22 14:23:51.635","isDeleted":false,"addedBy":64,"type":"negative","toUid":5,"toName":"Rohit Kumbhar","addedByUserId":64,"addedByName":"Vish S","scId":3,"scCategoryId":2,"subCategoryName":"fast","isSubCategoryDeleted":false,"categoryId":2,"categoryName":"work","companyId":1,"isCategoryDeleted":false,"fromUId":25,"fromUserName":"Sagar Panda"},{"ufId":16,"fromUserId":23,"toUserId":5,"feedbackTime":"2018-01-23 05:22:03.253","feedbackText":"testing feedback time.","subcategoryId":3,"isDeleted":false,"addedBy":64,"type":"positive","toUid":5,"toName":"Rohit Kumbhar","addedByUserId":64,"addedByName":"Vish S","scId":3,"scCategoryId":2,"subCategoryName":"fast","isSubCategoryDeleted":false,"categoryId":2,"categoryName":"work","companyId":1,"isCategoryDeleted":false,"fromUId":23,"fromUserName":"Rushikesh Salunke"}]
feedBackResult=[]
  constructor(public navCtrl: NavController,
  public menuCtrl:MenuController,public loadingCtrl: LoadingController,
  private storage: Storage,
  public http: HttpClient,
  public toastCtrl: ToastController,
  public modalCtrl: ModalController
  
  ) {

  }
ionViewWillEnter() { 
  //this.navCtrl.setRoot(HomePage); 
  //this.navCtrl.popToRoot();
  this.menuCtrl.close();
  this.storage.get('userDetails').then(data=>{
            
             this.getFeedbackData(data.object.authToken);
           })
  
  
}

getFeedbackData(token){
    let loading = this.loadingCtrl.create({
    content: ''
  });
  loading.present();
  let header = new HttpHeaders();
header = header.set('authToken', token);
    this.http.get(APIConstant.serviceUrl+APIConstant.feedbackUrl,{headers:header})
      .subscribe(
        res => {
          loading.dismiss();
          this.feedbackData=res
          this.feedBackResult=this.feedbackData.object.dataList
           
         // this.navCtrl.push(HomePage);
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

openFeedbackDetails(data){
 let modal = this.modalCtrl.create(FeedbackDetailsPage,{data:data});
    modal.present();
}

}
