(function () {
    var cityComponent = {
        templateUrl: "templates/weatherTemplate.html",

        controller: function () {
            var vm = this;
            }
    };



    angular.module("app")
        .component("cityComponent", cityComponent);

})();