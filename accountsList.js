angular.module("accountsViewer").component("accountsList", {


	template: `
		<div class="panel-group">
			<div class="list-container panel-success">
				<div class="accounts-list panel-body">
	            	<accounts-list-item
	            		ng-repeat="account in $ctrl.accounts"
	            		account="account"
	            		show-confirm="$ctrl.showConfirm(account.id)"
	            		show-details="$ctrl.shouldShowDetails(account)"
	            		ng-click="$ctrl.expandDetails(account)"
	            	>
	            	<button type="button" class="btn btn-primary update" ng-click="$ctrl.updateAccount(account)">Update</button>
	            	</account-list-item>
	    		</div>
			</div>
		</div>
	`,

    bindings: {
		accounts: '<',
		showConfirm: '&'
	},

	controller: function AccountsListController() {
		var $ctrl = this;

		$ctrl.activeAccountId = null;

		$ctrl.expandDetails = function (account) {
				if (account.id===$ctrl.activeAccountId) {
				$ctrl.activeAccountId = null;
			} else {
				$ctrl.activeAccountId = account.id;
				console.log(account);
       		};
		};

		$ctrl.shouldShowDetails = function (account) {
			return account.id === $ctrl.activeAccountId;
		};

		$ctrl.updateAccount = function (account) {
			$ctrl.modifyAccount = true;
		};
	}
});
