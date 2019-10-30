import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { GoogleLoginComponent } from 'src/app/components/google-login/google-login.component';
import { FacebookLoginComponent } from 'src/app/components/facebook-login/facebook-login.component';
var routes = [
    {
        path: '',
        component: LoginPage
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [LoginPage, GoogleLoginComponent, FacebookLoginComponent]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());
export { LoginPageModule };
//# sourceMappingURL=login.module.js.map