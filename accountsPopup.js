angular.module("accountsViewer").component("accountsPopup", {


	template: `
		<div class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" ng-if="$ctrl.createAccount">Creating account</h4>
                        <h4 class="modal-title" ng-if="$ctrl.modifyAccount">Modifying account</h4>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="InputEmail" placeholder="Email">

                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="InputEmail" placeholder="Email">

                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="InputEmail" placeholder="Email">

                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="InputEmail" placeholder="Email">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" ng-if="$ctrl.createAccount">Save account</button>
                        <button type="button" class="btn btn-primary" ng-if="$ctrl.modifyAccount">Update account</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
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
				if (account.accountId===$ctrl.activeAccountId) {
				$ctrl.activeAccountId = null;
			} else {
				$ctrl.activeAccountId = account.accountId;

			  };

		};

		$ctrl.shouldShowDetails = function (account) {
			return account.accountId === $ctrl.activeAccountId;
		};
	}
});
