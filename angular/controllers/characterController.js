marvelApp.controller('characterController', function($timeout, dataFetcher) {
	var vm = this;
	vm.submitted = false;
	vm.characterName = '';
	vm.characterData = dataFetcher.data;
	$timeout(function() {
		console.log("11",dataFetcher)
	}, 5000)

	vm.apiFetcher = function() {
		if(vm.characterName.length === 0) {
			return;
		}
		dataFetcher.getData(vm.characterName).then(function(data) {
			vm.characterData = data;
		});
		vm.submitted = true;
		vm.characterName = '';
	}
})