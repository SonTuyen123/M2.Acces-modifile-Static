"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, email, role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "role", {
        get: function () {
            return this._role;
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.getInfo = function () {
        return {
            "UserName": this.name,
            "UserEmail": this.email,
            "role": this.isAdmin()
        };
    };
    User.prototype.isAdmin = function () {
        if (this.role === 0) {
            return "admin";
        }
        else if (this.role === 1) {
            return "user";
        }
        else if (this.role === 2) {
            return "public";
        }
        else {
            return "role is not defined";
        }
    };
    return User;
}());
exports.User = User;
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["user"] = 1] = "user";
    Role[Role["public"] = 2] = "public";
})(Role || (Role = {}));
var user1 = new User("tuyen", "tuyen@gmail.com", 1);
console.log(user1.getInfo());
