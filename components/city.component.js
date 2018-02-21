(function() {
  var cityComponent = {
    templateUrl: "templates/city.template.html",

    controller: function(ChallengeService,GetApi) {
      var $ctrl = this;
      $ctrl.findLongestName = function (city){
        ChallengeService.setCity(city);
        ChallengeService.getCity();
        GetApi.searchWeather();
      }
    }
  };
  angular.module("app")
    .component("cityComponent", cityComponent);

})();
