marvelApp.controller('characterController', function(dataFetcher) {
	var vm = this;
	vm.submitted = false;
	vm.characterName = '';
	vm.characterData = [];

	vm.apiFetcher = function() {
		if(vm.characterName.length === 0) {
			return;
		}
		vm.characterData = dataFetcher.getData(vm.characterName);
		vm.submitted = true;
		vm.characterName = '';
	}
})