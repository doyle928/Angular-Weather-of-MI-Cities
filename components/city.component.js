(function() {
  var cityComponent = {
    templateUrl: "templates/city.template.html",

    controller: function(ChallengeService,GetApi) {
      var $ctrl = this;
      $ctrl.findLongestName = function (city){
        ChallengeService.setCity(city); //sets array in challenge service
        // ChallengeService.getCity();
        GetApi.searchWeather(ChallengeService.getCity());
      }
    }
  };
  angular.module("app")
    .component("cityComponent", cityComponent);

})();
