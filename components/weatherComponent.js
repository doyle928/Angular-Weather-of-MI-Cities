(function () {
    var weatherComponent = {
        templateUrl: "templates/weatherTemplate.html",

        controller: function () {
            var vm = this;
            }
    };



    angular.module("app")
        .component("weatherComponent", weatherComponent);

})();