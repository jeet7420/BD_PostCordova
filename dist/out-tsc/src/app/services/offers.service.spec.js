import { TestBed } from '@angular/core/testing';
import { OffersService } from './offers.service';
describe('OffersService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(OffersService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=offers.service.spec.js.map