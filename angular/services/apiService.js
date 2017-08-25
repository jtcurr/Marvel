marvelApp.service('dataFetcher', function($http, $q) {
	var vm = this;

	vm.getData = function(character) {
		var data = undefined;
		var date = new Date();
		var hash = md5(date.getTime() + privAPI_KEY + pubAPI_KEY);
		var url = "http://gateway.marvel.com/v1/public/characters?limit=100&name="+character+"&apikey="+pubAPI_KEY;
		url += "&ts=" + date.getTime() + "&hash=" + hash;

		var deferred = $q.defer();

		$http.get(url).then(function(response) {
			console.log('SUCCESS!', response.data.data.results[0]);
				data = response.data.data.results[0];
				vm.getCollection(data);
				deferred.resolve(data);
		}, function(error) {
			console.log('ERROR', error)
			data = error;
			deferred.reject(data);
		});
		data = deferred.promise;
			return $q.when(data);
	}

	vm.getCollection = function(data) {
		var date = new Date();
		var hash = md5(date.getTime() + privAPI_KEY + pubAPI_KEY);
		var collectionUrl = data.comics.collectionURI+"&apikey="+pubAPI_KEY;
		collectionUrl += "&ts=" + date.getTime() + "&hash=" + hash;
		$http.get(collectionUrl).then(function(response) {
			console.log('Got collection', response);
				// data = response.data.data.results[0];
				// deferred.resolve(data);
		}, function(error) {
			console.log('ERROR', error)
			// data = error;
			// deferred.reject(data);
		});
	}
})