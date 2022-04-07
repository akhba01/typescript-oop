var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hewan6 = /** @class */ (function () {
    function Hewan6() {
    }
    Hewan6.prototype.bernafas = function () {
        console.log("".concat(this.name, "  sedang bernafas"));
    };
    return Hewan6;
}());
var Katak6 = /** @class */ (function (_super) {
    __extends(Katak6, _super);
    function Katak6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Katak6.prototype.bernafas = function () {
        console.log("".concat(this.name, " bosan bernafas"));
    };
    return Katak6;
}(Hewan6));
var katak6 = new Katak6();
katak6.name = 'Katak';
katak6.bernafas();
