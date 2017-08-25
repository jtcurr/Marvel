marvelApp.controller('characterController', function($timeout, dataFetcher) {
	var vm = this;
	vm.submitted = false;
	vm.characterName = '';
	vm.characterData = '';
	vm.collectionData = undefined;

	vm.apiFetcher = function() {
		if(vm.characterName.length === 0) {
			return;
		}
		dataFetcher.getData(vm.characterName).then(function(data) {
			vm.characterData = data;
			dataFetcher.getCollection(data).then(function(collection) {
				vm.collectionData = collection;
			})
		});
		vm.submitted = true;
		vm.characterName = '';
	}
})