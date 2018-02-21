(function () {
    var weatherComponent = {
        templateUrl: "templates/weather.template.html",

        controller: function (GetApi) {
            var vm = this;
            
            vm.weatherData = GetApi.returnResults();
            // vm.weatherData.icon
            console.log("weather component", vm.weatherData);
        }
    };



    angular.module("app")
        .component("weatherComponent", weatherComponent);

})();