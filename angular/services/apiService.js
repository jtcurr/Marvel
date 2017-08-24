marvelApp.service('dataFetcher', function($http, $q) {

	this.getData = function(character) {
		var data = {};
		var date = new Date();
		var hash = md5(date.getTime() + privAPI_KEY + pubAPI_KEY);
		var url = "http://gateway.marvel.com/v1/public/characters?limit=100&name="+character+"&apikey="+pubAPI_KEY;
		url += "&ts=" + date.getTime() + "&hash=" + hash;

		var deferred = $q.defer();

		$http.get(url).then(function mySuccess(response) {
			console.log('SUCCESS!', response.data.data.results[0]);
			if(response.data.data.results.length === 0) {
				data = null;
				deferred.resolve(data)
			}
			else {
				console.log(response.data.data.results[0])
				data = response.data.data.results[0];
				deferred.resolve(data);
			}
		}), function myError(error) {
			console.log('ERROR', error)
			data = error;
			deferred.resolve(data);
		}
		return $q.when(data);
	}
})