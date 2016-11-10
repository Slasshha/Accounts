angular.module("accountsViewer").component("accountsList", {


	template: `
		<div class="list-container">
			<div class="accounts-list">
            	<accounts-list-item
            		ng-repeat="account in $ctrl.accounts"
            		account="account"
            		show-details="$ctrl.shouldShowDetails(account)"
            		ng-click="$ctrl.expandDetails(account)"
            	></account-list-item>
    		</div>
		</div>
	`,

    bindings: {
		accounts: '<'
	},

	controller: function AccountsListController() {
		var $ctrl = this;

		$ctrl.activeAccountId = null;

		$ctrl.expandDetails = function (account) {
			console.log("click done");
			$ctrl.activeAccountId = account.accountId;

		};

		$ctrl.shouldShowDetails = function (account) {
			return account.accountId === $ctrl.activeAccountId;
		};
	}
});
