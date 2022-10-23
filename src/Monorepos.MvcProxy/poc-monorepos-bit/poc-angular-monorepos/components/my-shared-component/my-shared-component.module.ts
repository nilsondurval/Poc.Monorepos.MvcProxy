import { NgModule } from '@angular/core';
import { MySharedComponentComponent } from './my-shared-component.component';

@NgModule({
  declarations: [
    MySharedComponentComponent
  ],
  imports: [],
  exports: [
    MySharedComponentComponent
  ]
})
export class MySharedComponentModule {}
