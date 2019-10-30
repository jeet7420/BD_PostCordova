import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
//import { GooglePlus, GooglePlusOriginal} from '@ionic-native/google-plus';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Facebook } from '@ionic-native/Facebook/ngx';
var firebaseConfig = {
    //apiKey: "130563067105-v3vjge5njp5rch7df1km8i4sj3fduj03.apps.googleusercontent.com",
    apiKey: "AIzaSyBTcW8cv_sIFNcqZ3sGlf5ZN0_A8hEw3HY",
    authDomain: "beerdrumsignin.firebaseapp.com"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent],
            entryComponents: [],
            imports: [
                BrowserModule,
                IonicModule.forRoot(),
                IonicStorageModule.forRoot({ name: '__jppdb' }),
                AngularFireModule.initializeApp(firebaseConfig),
                AngularFireAuthModule,
                AppRoutingModule,
                HttpClientModule
            ],
            providers: [
                GooglePlus,
                Facebook,
                StatusBar,
                SplashScreen,
                CallNumber,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map