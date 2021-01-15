"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foo = void 0;
var Foo = (function () {
    function Foo(r) {
        this.schema = r;
        this.g = parseInt(r, 10);
        console.log();
    }
    return Foo;
}());
exports.Foo = Foo;
var r = new Foo('23');
console.log(r);
//# sourceMappingURL=index.js.map