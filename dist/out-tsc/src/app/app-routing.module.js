import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
    { path: 'partner-details', loadChildren: './pages/partner-details/partner-details.module#PartnerDetailsPageModule' },
    { path: 'support', loadChildren: './pages/support/support.module#SupportPageModule' },
    { path: 'history', loadChildren: './pages/history/history.module#HistoryPageModule' },
    { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map