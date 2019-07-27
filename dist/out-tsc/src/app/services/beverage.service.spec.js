import { TestBed } from '@angular/core/testing';
import { BeverageService } from './beverage.service';
describe('BeverageService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(BeverageService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=beverage.service.spec.js.map