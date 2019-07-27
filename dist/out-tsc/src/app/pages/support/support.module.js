import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SupportPage } from './support.page';
import { ExpandableComponent } from 'src/app/components/expandable/expandable.component';
var routes = [
    {
        path: '',
        component: SupportPage
    }
];
var SupportPageModule = /** @class */ (function () {
    function SupportPageModule() {
    }
    SupportPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SupportPage, ExpandableComponent]
        })
    ], SupportPageModule);
    return SupportPageModule;
}());
export { SupportPageModule };
//# sourceMappingURL=support.module.js.map