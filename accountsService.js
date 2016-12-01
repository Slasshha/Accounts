(function() {

	var module = angular.module('accountsViewer');

	module.constant('accountsEndpoint',
		    {"endpoint": 'http://localhost:1337/account'}
	);


	module.service('accountsService', ['$http', 'accountsEndpoint', function($http, accountsEndpoint) {
		this.getAccounts = function() {
			return $http.get(accountsEndpoint.endpoint);
		};

		this.addAccount = function(newAccount) {
			return $http.post(accountsEndpoint.endpoint, newAccount);
		};
	}]);


}());

