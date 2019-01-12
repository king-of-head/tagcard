import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyInfoEditPage } from './my-info-edit';

@NgModule({
  declarations: [
    MyInfoEditPage,
  ],
  imports: [
    IonicPageModule.forChild(MyInfoEditPage),
  ],
})
export class MyInfoEditPageModule {}
