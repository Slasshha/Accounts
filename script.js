
(function() {
	var app = angular.module("accountsViewer",['ngMessages', 'ngMaterial']);

	var MainController = function($scope, $http, $mdDialog, accountsService) {
		var vm = this;

		vm.showAccountsPopup = false;
		vm.newAccount = null;

		accountsService.getAccounts().then(function (accounts) {
			vm.accounts = accounts.data;
			console.log(accounts);
		});

		vm.showAddNewAccountPopup = function () {
			vm.showAccountsPopup = true;
			console.log(vm.showAccountsPopup);
			vm.newAccount = {
			  "name": null,
		      "email": null,
		      "login": null,
       	      "age": null,
		      "gender": null,
		      "phoneNumber": null
			};

		};

		vm.refreshList = function () {
			accountsService.getAccounts().then(function (accounts) {
			vm.accounts = accounts.data;
		});


		};



		vm.addNewAccount = function () {
			accountsService.addAccount(vm.newAccount)
			               .then(function(response){
			               	    console.log(response);
			               	    if(response.status===200 || response.status===201) {
			               		vm.refreshList();
			               		vm.showAccountsPopup = false;
			               		}
			               });
		};

		vm.showConfirm = function(accountId) {
    // Appending dialog to document.body to cover sidenav in docs app
		    var confirm = $mdDialog.confirm()
		          .title('Deleting account')
		          .textContent('Are you sure you want to delete this account?')
		          .ariaLabel('Lucky day')
		          .targetEvent(ev)
		          .ok('Yes')
		          .cancel('No');

		    $mdDialog.show(confirm).then(function() {
			  accountsService.deleteAccount(accountId);
			}, function() {
			  $scope.status = 'You decided to keep your debt.';
			});
	    };





	};


app.controller("MainController", ["$scope", "$http", "$mdDialog", "accountsService", MainController]);


}());
