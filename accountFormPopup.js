angular.module("accountsViewer").component("accountFormPopup", {


	template: `
		<div class="modal fade" tabindex="-1" role="dialog" ng-class="{'open in': $ctrl.show}">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form name="accountForm" ng-submit="$ctrl.onSubmit()">
	                    <div class="modal-header">
	                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" ng-click="$ctrl.hidePopup()"><span aria-hidden="true">&times;</span></button>
	                        <h4 class="modal-title">Creating account</h4>
	                    </div>
	                    <div class="modal-body">
	                        <div class="form-group">
	                            <label for="userName">Name</label>
	                            <input type="text" class="form-control" id="userName" placeholder="Name">

	                            <label for="userAge">Age</label>
	                            <input type="number" min="18" max="100" class="form-control" id="userAge" placeholder="Age">

	                            <label for="userGender">Gender</label>
	                            <select class="form-control" id="userGender" placeholder="Gender">
	                                <option value="male">Male</option>
	                                <option value="female">Female</option>
	                            </select>

	                            <label for="phonel">Phone number</label>
	                            <input type="text" class="form-control" id="phone" placeholder="Phone number">

	                            <label for="inputEmail">Email address</label>
	                            <input type="email" class="form-control" id="inputEmail" placeholder="Email">

	                            <label for="userLogin">Login</label>
	                            <input type="text" class="form-control" id="userLogin" placeholder="Login">
	                        </div>
	                    </div>
	                    <div class="modal-footer">
	                        <button type="submit" class="btn btn-primary" ng-disabled="accountForm.$invalid">Save account</button>
	                        <button type="button" class="btn btn-default" data-dismiss="modal" ng-click="$ctrl.hidePopup()">Close</button>
	                    </div>
                    </form>
                </div>
            </div>
        </div>
	`,

    bindings: {
    	show: '=',
    	account: '=',
    	onSubmit: '&'
	},

	controller: function AccountsActionsController() {
		var $ctrl = this;

		$ctrl.hidePopup = function () {
			$ctrl.show = false;
		};

	}


});
