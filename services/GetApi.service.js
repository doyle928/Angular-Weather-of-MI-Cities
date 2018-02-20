(function() {
    function GetApi($http) {
      var weatherData = {};
    
      return {
        returnResults: returnResults,
        searchWeather: searchWeather
      };
      
      function searchWeather(searchCriteria) {
        return $http({
          method: 'GET',
          url: 'http://api.wunderground.com/api/6223b2f5321ee9e1/conditions/q/' + searchCriteria.state + '/' + searchCriteria.city + '.json'
        }).then(function successfulCallback(response) {
          finalData.temp = response.data.current_observation.temp_f;
          finalData.weather = response.data.current_observation.weather;
          finalData.feel = response.data.current_observation.feelslike_f;
        }, function(error) {
          console.log(error);
        });
      }
      
      function returnResults() {
        return finalData;
      }
    }
    
    angular
      .module("weatherModule")
      .factory("WeatherFactory", WeatherFactory);
    })();