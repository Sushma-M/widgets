Application.$controller("MainPageController", ['$scope', 'Widgets', 'Variables', function ($scope, Widgets, Variables) {
    "use strict";

    /* perform any action with the variables inside this block(on-page-load) */
    $scope.onPageVariablesReady = function() {
        /*
         * variables can be accessed through 'Variables' service here
         * e.g. Variables.staticVariable1.getData()
         */
    };

}]);