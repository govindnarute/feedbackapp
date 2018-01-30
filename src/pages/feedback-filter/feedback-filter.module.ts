import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedbackFilterPage } from './feedback-filter';

@NgModule({
  declarations: [
    FeedbackFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedbackFilterPage),
  ],
})
export class FeedbackFilterPageModule {}
