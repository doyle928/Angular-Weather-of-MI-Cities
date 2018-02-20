(function() {
  var cityComponent = {
    templateUrl: "templates/cityTemplate.html",

    controller: function(ChallengeService) {
      var $ctrl = this;
      $ctrl.findLongestName = function (city){
        ChallengeService.setCity(city);
      }
      // $ctrl.longest = "";
      // $ctrl.findLongestName = function(city1, city2, city3, city4, city5) {
      //   $ctrl.longest = city1;
      //   if ($ctrl.longest <= city2.length) {
      //     $ctrl.longest = city2;
      //   }
      //   if ($ctrl.longest <= city3.length) {
      //     $ctrl.longest = city3;
      //   }
      //   if ($ctrl.longest <= city4.length) {
      //     $ctrl.longest = city4;
      //   }
      //   if ($ctrl.longest <= city5.length) {
      //     $ctrl.longest = city5;
      //   }
      // };
    }
  };
  angular.module("app")
    .component("cityComponent", cityComponent);

})();
