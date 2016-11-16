(function() {

	var module = angular.module('accountsViewer');

	module.service('accountsService', ['$q', 'hardcodedAccounts', function() {
		this.getAccounts = function() {
			let defer = $q.defer();
            defer.resolve(hardcodedAccounts);
            return defer.promise;
		};
	}]);
}());

