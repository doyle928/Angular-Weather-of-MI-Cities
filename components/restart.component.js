(function () {
    var restartComponent = {
        templateUrl: "templates/restart.template.html",

        controller: function (GetApi) {
            var vm = this;
            vm.weatherData = GetApi.returnResults();
            
        }
    };
    angular.module("app")
        .component("restartComponent", restartComponent);

})();