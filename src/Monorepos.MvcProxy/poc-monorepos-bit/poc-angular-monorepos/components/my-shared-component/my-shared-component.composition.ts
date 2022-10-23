import { Component, NgModule } from '@angular/core';
import { MySharedComponentModule } from './my-shared-component.module';

@Component({
  selector: 'my-shared-component-composition-cmp',
  template: `MySharedComponent composition: <my-shared-component></my-shared-component>`
})
export class MySharedComponentCompositionComponent {}

@NgModule({
  declarations: [MySharedComponentCompositionComponent],
  imports: [MySharedComponentModule],
  bootstrap: [MySharedComponentCompositionComponent]
})
export class MySharedComponentCompositionModule {}
