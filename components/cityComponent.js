(function() {
  var cityComponent = {
    templateUrl: "templates/cityTemplate.html",

    controller: function(ChallengeService) {
      var $ctrl = this;
      $ctrl.findLongestName = function (city){
        ChallengeService.setCity(city);
      }
    }
  };
  angular.module("app")
    .component("cityComponent", cityComponent);

})();
