import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from 'src/app/services/auth.guard';
var routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'dispense',
                children: [
                    {
                        path: '',
                        loadChildren: '../dispense/dispense.module#DispensePageModule',
                        canActivate: [AuthGuard]
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: '../profile/profile.module#ProfilePageModule',
                        canActivate: [AuthGuard]
                    }
                ]
            },
            {
                path: 'offers',
                children: [
                    {
                        path: '',
                        loadChildren: '../offers/offers.module#OffersPageModule'
                    }
                ]
            },
            {
                path: 'history',
                children: [
                    {
                        path: '',
                        loadChildren: '../history/history.module#HistoryPageModule'
                    }
                ]
            },
            {
                path: 'support',
                children: [
                    {
                        path: '',
                        loadChildren: '../support/support.module#SupportPageModule'
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: '../settings/settings.module#SettingsPageModule'
                    }
                ]
            },
            {
                path: 'login',
                children: [
                    {
                        path: '',
                        loadChildren: '../login/login.module#LoginPageModule'
                    }
                ]
            },
            {
                path: 'register',
                children: [
                    {
                        path: '',
                        loadChildren: '../register/register.module#RegisterPageModule'
                    }
                ]
            },
            {
                path: 'opt-input-panel',
                children: [
                    {
                        path: '',
                        loadChildren: '../otp-input-panel/otp-input-panel.module#OtpInputPanelPageModule'
                    }
                ]
            },
            {
                path: ':partnerId',
                children: [
                    {
                        path: '',
                        loadChildren: '../partner-details/partner-details.module#PartnerDetailsPageModule'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map