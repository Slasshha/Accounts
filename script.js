
(function() {
	var app = angular.module("accountsViewer",['ngMessages']);

	var MainController = function($scope, $http, accountsService) {
		var vm = this;

		vm.showAccountsPopup = false;
		vm.newAccount = null;

		accountsService.getAccounts().then(function (accounts) {
			vm.accounts = accounts.data;
		});

		vm.showAddNewAccountPopup = function () {
			vm.showAccountsPopup = true;
			vm.newAccount = {
			  "name": null,
		      "email": null,
		      "login": null,
       	      "age": null,
		      "gender": null,
		      "phoneNumber": null
			};

		};

		vm.addNewAccount = function () {
			accountsService.addAccount(vm.newAccount);
		};
	};


app.controller("MainController", ["$scope", "$http", "accountsService", MainController]);


}());
