"use strict";
exports.__esModule = true;
exports.ProductManager = exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Object.defineProperty(Product.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getPrice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setPrice", {
        set: function (price) {
            this.price = price;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
exports.Product = Product;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
    }
    Object.defineProperty(ProductManager.prototype, "getAll", {
        get: function () {
            return this.products;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductManager.prototype, "add", {
        set: function (product) {
            this.products.push(product);
        },
        enumerable: false,
        configurable: true
    });
    return ProductManager;
}());
exports.ProductManager = ProductManager;
