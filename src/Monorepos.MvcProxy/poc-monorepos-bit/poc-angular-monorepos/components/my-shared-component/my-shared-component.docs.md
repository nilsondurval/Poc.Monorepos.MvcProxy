---
labels: ['angular', 'typescript', 'my-shared-component']
description: 'A `my-shared-component` component.'
---

# MySharedComponent documentation

Import `MySharedComponentModule` into your application:

```ts
import { MySharedComponentModule } from './my-shared-component.module';

// add it to your module imports
@NgModule({
  imports: [
    MySharedComponentModule
  ]
})
export class AppModule {}
```

Use `MySharedComponentComponent` in your templates:

```html
<my-shared-component></my-shared-component>
```
