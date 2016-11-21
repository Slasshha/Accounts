
(function() {
	var app = angular.module("accountsViewer",[]);

	var MainController = function($scope, $q, accountsService) {
		var vm = this;

		vm.showAccountsPopup = false;
		vm.newAccount = null;

		accountsService.getAccounts().then(function (accounts) {
			vm.accounts = accounts;
		});

		vm.showAddNewAccountPopup = function () {
			vm.showAccountsPopup = true;
			vm.newAccount = {};
		};

		vm.addNewAccount = function () {
			console.log("add new acc", vm.newAccount);

		};
	};


app.controller("MainController", ["$scope", "$q", "accountsService", MainController]);


}());
