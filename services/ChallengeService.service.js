(function () {
    function ChallengeService(GetApi) {
        var cityNames = {};
        var longest = "";

        return {
            getCity: getCity,
            setCity: setCity
        }

        function getCity() {
            for(i=1; i <= 4; i++){
                console.log("city length", cityNames["city"+i].length);
                if(longest.length <= cityNames["city"+i].length){
                    longest = cityNames["city"+i];
                    console.log("longest in loop", longest);
                }
            }
            //GetApi.searchWeather(longest);
            
            return longest;

        }

        function setCity(city) {
            cityNames = city;
            console.log(cityNames);
            longest = "";
        }
    }
    angular
        .module("app")
        .factory("ChallengeService", ChallengeService);
})();