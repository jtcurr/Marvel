marvelApp.service('dataFetcher', function($http) {

	this.getData = function(character) {
		var date = new Date();
		var hash = md5(date.getTime + privAPI_KEY + pubAPI_KEY);
		var url = "http://gateway.marvel.com/v1/public/characters?limit=100&apikey="+pubAPI_KEY;
		$http({
			method: "GET",
			apikey: pubAPI_KEY,
			url: "http://gateway.marvel.com/v1/public/characters"
			// ts: date.getTime(),
			// hash: md5(date.getTime + privAPI_KEY + pubAPI_KEY)
		}).then(function mySuccess(response) {
			console.log('SUCCESS!', response);
		}), function myError(response) {
			console.log('ERROR', response)
		}
	}
})