(function (app) {

    function svcA() {
        var self = this;

        self.name = "scv-A";

        return self;
    }

    function svcB() {
        var self = this;

        self.name = "scv-B";

        return self;
    }

    function svcC() {
        var self = this;

        self.name = "scv-C";

        return self;
    }

    app.factory('svcA', [svcA]);
    app.factory('svcB', [svcB]);
    app.factory('svcC', [svcC]);

})(angular.module('testApp'));