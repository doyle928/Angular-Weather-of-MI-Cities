(function() {
  function ChallengeService() {
    var cityNames = [];
    return {
      getCity: getCity,
      setCity: setCity
    }
    function getCity() {
      return cityNames;
    }
    function setCity(list) {
       cityNames = list;
    }
  }
  angular
    .module("app")
    .factory("ChallengeService", ChallengeService);
})();
