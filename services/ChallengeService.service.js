(function() {
  function ChallengeService() {
    var cityNames = {};
    return {
      getCity: getCity,
      setCity: setCity
    }
    function getCity() {
      
    }
    function setCity(city) {
       cityNames.push(city);
       console.log(city);
       console.log(cityNames);
    }
  }
  angular
    .module("app")
    .factory("ChallengeService", ChallengeService);
})();
