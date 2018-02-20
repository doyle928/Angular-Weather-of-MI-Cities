(function() {
  function GetApiService() {
    // var  = {};
    return {
      get: get,
      set: set
    }
    function get() {
      // return ;
    }
    function set() {


    }
  }
  angular
    .module("app")
    .factory("GetApiService", GetApiService);
})();
