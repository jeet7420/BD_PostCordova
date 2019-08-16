import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'partner-details', loadChildren: './pages/partner-details/partner-details.module#PartnerDetailsPageModule' },
  { path: 'support', loadChildren: './pages/support/support.module#SupportPageModule' },  
  { path: 'history', loadChildren: './pages/history/history.module#HistoryPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' }
  //{ path: 'otp-input-panel', loadChildren: './pages/otp-input-panel/otp-input-panel.module#OtpInputPanelPageModule' }
  //{ path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' }
  //{ path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
