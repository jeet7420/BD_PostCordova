import { TestBed } from '@angular/core/testing';
import { GoogleLoginService } from './google-login.service';
describe('GoogleLoginService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(GoogleLoginService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=google-login.service.spec.js.map