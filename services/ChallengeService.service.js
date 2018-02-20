(function() {
  function ChallengeService() {
    var cityNames = [];
    return {
      getCity: getCity,
      setCity: setCity
    }
    function getCity() {
      return ;
    }
    function setCity() {
       
    }
  }
  angular
    .module("app")
    .factory("ChallengeService", ChallengeService);
})();
