marvelApp.service('dataFetcher', function($http) {

	this.getData = function(character) {
		var date = new Date();
		var hash = md5(date.getTime() + privAPI_KEY + pubAPI_KEY);
		var url = "http://gateway.marvel.com/v1/public/characters?limit=100&name="+character+"&apikey="+pubAPI_KEY;
		url += "&ts=" + date.getTime() + "&hash=" + hash;
		$http.get(url).then(function mySuccess(response) {
			console.log('SUCCESS!', response.data.data.results[0]);
			if(response.data.data.results.length === 0) {
				return null;
			}
			else {
				return response.data.data.results[0];
			}
		}), function myError(response) {
			console.log('ERROR', response)
		}
	}
})