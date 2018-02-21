(function() {
    var startComponent = {
      templateUrl: "templates/start.template.html",
  
      controller: function(GetApi) {
        var vm = this;
        
           GetApi.searchWeather("detroit");
        
        
      }
    };
    angular.module("app")
      .component("startComponent", startComponent);
  
  })();
  