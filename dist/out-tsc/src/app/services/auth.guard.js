import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("inside guard service");
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        if (_a.sent()) {
                            console.log(this.authService.getToken());
                            return [2 /*return*/, true];
                        }
                        this.router.navigate(['/tabs/login'], {
                            queryParams: {
                                redirect: state.url
                            }
                        });
                        return [2 /*return*/, false];
                }
            });
        });
    };
    AuthGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router, AuthService])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map