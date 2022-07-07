var Application = /** @class */ (function () {
    function Application($name) {
        this.name = $name;
        Application.count++;
    }
    Application.count = 0;
    return Application;
}());
console.log(Application.count);
var app1 = new Application("cac");
console.log(Application.count);
var app2 = new Application("cac to");
console.log(Application.count);
