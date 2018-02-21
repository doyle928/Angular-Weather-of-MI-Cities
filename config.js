(function () {
    angular
        .module("app")
        .config(function ($routeProvider) {
            $routeProvider
                .when("/start", {
                    template: "<start-component></start-component>"
                })
                .when("/city-form", {
                    template: "<city-component></city-component>"
                })
                .when("/restart-component", {
                    template: "<restart-component></restart-component>"
                })
                .otherwise({
                    redirectTo: "/start"
                })
        });
})();