import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef, Input, Renderer2 } from '@angular/core';
var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent(renderer) {
        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "150px";
    }
    ExpandableComponent.prototype.ngOnInit = function () {
        this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
    };
    tslib_1.__decorate([
        ViewChild("expandWrapper", { read: ElementRef }),
        tslib_1.__metadata("design:type", ElementRef)
    ], ExpandableComponent.prototype, "expandWrapper", void 0);
    tslib_1.__decorate([
        Input("expanded"),
        tslib_1.__metadata("design:type", Boolean)
    ], ExpandableComponent.prototype, "expanded", void 0);
    tslib_1.__decorate([
        Input("expandHeight"),
        tslib_1.__metadata("design:type", String)
    ], ExpandableComponent.prototype, "expandHeight", void 0);
    ExpandableComponent = tslib_1.__decorate([
        Component({
            selector: 'app-expandable',
            templateUrl: './expandable.component.html',
            styleUrls: ['./expandable.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2])
    ], ExpandableComponent);
    return ExpandableComponent;
}());
export { ExpandableComponent };
//# sourceMappingURL=expandable.component.js.map