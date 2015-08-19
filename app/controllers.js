(function (app) {

    function ctrlA(sa, sb) {
        this.name = "A";
        this.gotoC = function() {
            window.kendo.mobile.application.navigate('app/viewC.html');
        };
    }

    function ctrlB(sc, sb) {
        this.name = "B";
        this.gotoC = function () {
            window.kendo.mobile.application.navigate('app/viewC.html');
        };
    }

    function ctrlC(sa, sc) {
        this.name = "C";
        this.gotoC = function () {
            window.kendo.mobile.application.navigate('app/viewC.html');
        };
    }

    app.controller('ctrlA', ['svcA', 'svcB', ctrlA]);
    app.controller('ctrlB', ['svcC', 'svcB', ctrlB]);
    app.controller('ctrlC', ['svcA', 'svcC', ctrlC]);

})(angular.module('testApp'));