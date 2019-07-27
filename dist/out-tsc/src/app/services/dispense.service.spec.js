import { TestBed } from '@angular/core/testing';
import { DispenseService } from './dispense.service';
describe('DispenseService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DispenseService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=dispense.service.spec.js.map