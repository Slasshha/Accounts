angular.module("accountsViewer").component("accountFormPopup", {


	template: `
		<div class="modal fade" tabindex="-1" role="dialog" ng-class="{'open in': $ctrl.show}">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form name="$ctrl.accountForm" ng-submit="$ctrl.onFormSubmit()" novalidate>
	                    <div class="modal-header">
	                        <button type="button" class="close" aria-label="Close" ng-click="$ctrl.hidePopup()"><span aria-hidden="true">&times;</span></button>
	                        <h4 class="modal-title">Creating account</h4>
	                    </div>
	                    <div class="modal-body">
	                        <div
	                        	class="form-group"
	                        	ng-class="{'has-error': $ctrl.accountForm.userName.$invalid && $ctrl.accountForm.userName.$dirty}"
	                        >
	                            <label class="control-label" for="userName">Name</label>
	                            <input
	                            	type="text"
	                            	name="userName"
	                            	class="form-control"
	                            	id="userName"
	                            	placeholder="Name"
	                            	ng-model="$ctrl.account.name"
	                            	required
	                            	minlength="3"
	                            	pattern="[a-zA-Z\s]+"
	                            />

								<div ng-messages="$ctrl.accountForm.userName.$error" class="help-block">
									<div ng-message="minlength">Name should have at least 3 characters.</div>
									<div ng-message="pattern">Name should have only letters.</div>
								</div>

	                        </div>

	                        <div class="form-group" ng-class="{'has-error': $ctrl.accountForm.age.$invalid && $ctrl.accountForm.age.$dirty}" >
	                            <label class="control-label"
	                                   for="userAge">Age</label>
	                            <input
	                                type="number"
	                                name="age"
	                                min="18"
	                                max="100"
	                                class="form-control"
	                                id="userAge"
	                                placeholder="Age"
	                                ng-model="$ctrl.account.age"
	                                ng-model-options="{updateOn: 'blur'}"
	                                required
	                            />

	                            <div ng-if="$ctrl.accountForm.age.$error.required" class="help-block">Age is required.</div>
	                            <div ng-if="$ctrl.accountForm.age.$error.min" class="help-block">Age should be greater than 18.</div>
	                            <div ng-if="$ctrl.accountForm.age.$error.max" class="help-block">Age should be less than 100.</div>
	                            <div ng-if="$ctrl.accountForm.age.$error.number" class="help-block">Age should a number.</div>
	                        </div>

	                        <div class="form-group">
	                            <label for="userGender">Gender</label>
	                            <select class="form-control" id="userGender" placeholder="Gender" ng-model="$ctrl.account.gender">
	                                <option value="male">Male</option>
	                                <option value="female">Female</option>
	                            </select>
	                        </div>

	                        <div class="form-group">
	                            <label for="phoneNumber">Phone number</label>
	                            <input type="text" class="form-control" id="phoneNumber" placeholder="Phone number" ng-model="$ctrl.account.phoneNumber">
	                        </div>

	                        <div class="form-group">
	                            <label for="inputEmail">Email address</label>
	                            <input type="email" class="form-control" id="inputEmail" placeholder="Email" ng-model="$ctrl.account.email">
	                        </div>

	                        <div class="form-group">
	                            <label for="userLogin">Login</label>
	                            <input type="text" class="form-control" id="userLogin" placeholder="Login" ng-model="$ctrl.account.login">
	                        </div>
	                    </div>
	                    <div class="modal-footer">
	                        <button type="submit" class="btn btn-primary">Save account</button>
	                        <button type="button" class="btn btn-default" ng-click="$ctrl.hidePopup()">Close</button>
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

		$ctrl.onFormSubmit = function() {
			if ($ctrl.accountForm.$valid) {
				$ctrl.onSubmit()
			}
		};
	}


});
