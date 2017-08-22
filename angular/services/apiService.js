marvelApp.service('dataFetcher', function($http) {

	this.getData = function(character) {
		var date = new Date();
		$http({
			method: "GET",
			apikey: privAPI_KEY,
			url: "http://gateway.marvel.com/v1/public/characters",
			ts: date.getTime(),
			hash: CryptoJS.MD5(date.getTime + privAPI_KEY + pubAPI_KEY)
		}).then(function mySuccess(response) {
			console.log('SUCCESS!', response);
		}), function myError(response) {
			console.log('ERROR', response)
		}
	}
})