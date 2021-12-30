import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmpComponent } from './emp/emp.component';
import { DeptsComponent } from './depts/depts.component';
import { ArraytechComponent } from './arraytech/arraytech.component';
import { ProductComponent } from './product/product.component';
import { CardsComponent } from './cards/cards.component';
import { CalcPriceComponent } from './calc-price/calc-price.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { CrudComponent } from './crud/crud.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Sib1ComComponent } from './sib1-com/sib1-com.component';
import { Sib2ComComponent } from './sib2-com/sib2-com.component';
import { SwitchdirComponent } from './switchdir/switchdir.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlicepipeComponent } from './slicepipe/slicepipe.component';
import { GradepipePipe } from './gradepipe.pipe';
import { CustomepipeComponent } from './customepipe/customepipe.component';
import { RangepipePipe } from './rangepipe.pipe';
import { CustpipeComponent } from './custpipe/custpipe.component';
import { ApitestComponent } from './apitest/apitest.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmpCrudApiComponent } from './emp-crud-api/emp-crud-api.component';
import { InterceptorService } from './interceptor.service';
import { VehicleRegistrationComponent } from './vehicle-registration/vehicle-registration.component';
import { ShadowDirective } from './shadow.directive';
import { CustDirExComponent } from './cust-dir-ex/cust-dir-ex.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpComponent,
    DeptsComponent,
    ArraytechComponent,
    ProductComponent,
    CardsComponent,
    CalcPriceComponent,
    AddProductComponent,
    CrudComponent,
    DeptDetailsComponent,
    DeptListComponent,
    ProductListComponent,
    Sib1ComComponent,
    Sib2ComComponent,
    SwitchdirComponent,
    SlicepipeComponent,
    GradepipePipe,
    CustomepipeComponent,
    RangepipePipe,
    CustpipeComponent,
    ApitestComponent,
    EmpCrudApiComponent,
    VehicleRegistrationComponent,
    ShadowDirective,
    CustDirExComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
   /* {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService ,
    multi: true
    }*/
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
