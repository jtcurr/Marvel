marvelApp.controller('characterController', [function() {
	this.submitted = false;
	this.characterName = '';

	this.apiFetcher = function() {
		this.characterName = '';
	}
}])