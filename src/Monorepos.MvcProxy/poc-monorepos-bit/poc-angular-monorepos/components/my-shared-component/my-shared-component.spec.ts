import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySharedComponentComponent } from './my-shared-component.component';
import { MySharedComponentModule } from './my-shared-component.module';

describe('MySharedComponentComponent', () => {
  let component: MySharedComponentComponent;
  let fixture: ComponentFixture<MySharedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MySharedComponentModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySharedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
