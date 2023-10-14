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
var usersUtils;
(function (usersUtils) {
    var Parent = /** @class */ (function () {
        function Parent() {
        }
        Parent.prototype.setName = function (name) {
            return this.name = name;
        };
        return Parent;
    }());
    usersUtils.Parent = Parent;
})(usersUtils || (usersUtils = {}));
// Namespace not use more use in older times 
//  namespace is block of code which is user related data
///<reference path='./utiles.ts' />
var usersUtils;
(function (usersUtils) {
    var users = /** @class */ (function (_super) {
        __extends(users, _super);
        function users() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        users.prototype.getName = function () {
            return this.name;
        };
        return users;
    }(usersUtils.Parent));
    usersUtils.users = users;
})(usersUtils || (usersUtils = {}));
var h1 = new usersUtils.users();
h1.setName("tonny");
console.log(h1.getName());
