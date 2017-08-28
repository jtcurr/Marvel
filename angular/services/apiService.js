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
		var collection = undefined;
		var date = new Date();
		var hash = md5(date.getTime() + privAPI_KEY + pubAPI_KEY);

		var deferred = $q.defer();

		var collectionUrl = data.comics.collectionURI +"?ts=" + date.getTime() +"&apikey="+pubAPI_KEY;
		collectionUrl += "&hash=" + hash;
		$http.get(collectionUrl).then(function(response) {
			response = response.data.data.results;
			for(var i = 0; i < response.length; i++) {
				if(response[i].description){
					response[i].description = response[i].description.split('<')[0];
				}
				if(!response[i].description) {
					response.splice(i,1);
					console.log(response)
				}
			}
			deferred.resolve(response);
		}, function(error) {
			console.log('ERROR', error);
			deferred.reject(error);
		});
		collection = deferred.promise;
		return $q.when(collection);
	}
})