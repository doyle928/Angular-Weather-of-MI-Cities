(function () {
    var restartComponent = {
        templateUrl: "templates/restart.template.html",

        controller: function (ChallengeService) {
            var vm = this;
            vm.weatherData = "";
            vm.weatherData = ChallengeService.getCity();
            
        }
    };
    angular.module("app")
        .component("restartComponent", restartComponent);

})();