import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OtpInputPanelPage } from './otp-input-panel.page';
var routes = [
    {
        path: '',
        component: OtpInputPanelPage
    }
];
var OtpInputPanelPageModule = /** @class */ (function () {
    function OtpInputPanelPageModule() {
    }
    OtpInputPanelPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [OtpInputPanelPage]
        })
    ], OtpInputPanelPageModule);
    return OtpInputPanelPageModule;
}());
export { OtpInputPanelPageModule };
//# sourceMappingURL=otp-input-panel.module.js.map