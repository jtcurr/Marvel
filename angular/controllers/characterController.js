marvelApp.controller('characterController', function(dataFetcher) {
	this.submitted = false;
	this.characterName = '';

	this.apiFetcher = function() {
		
		dataFetcher.getData(this.characterName);
		this.characterName = '';
	}
})