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
	                            >

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
	                            >

	                            <div ng-if="$ctrl.accountForm.age.$dirty">
	                                <div ng-if="$ctrl.accountForm.age.$error.required" class="help-block">Age is required.</div>
	                                <div ng-if="$ctrl.accountForm.age.$error.min" class="help-block">Age should be greater than 18.</div>
	                                <div ng-if="$ctrl.accountForm.age.$error.max" class="help-block">Age should be less than 100.</div>
	                                <div ng-if="$ctrl.accountForm.age.$error.number" class="help-block">Age should be a number.</div>
	                            </div>
	                        </div>

	                        <div class="form-group" ng-class="{'has-error': $ctrl.accountForm.gender.$invalid && $ctrl.accountForm.gender.$dirty}">
	                            <label for="userGender">Gender</label>
	                            <select
	                            	class="form-control"
	                            	id="userGender"
	                            	name="gender"
	                            	placeholder="Gender"
	                            	ng-model="$ctrl.account.gender"
	                            	ng-model-options="{updateOn: 'blur'}"
	                            	required>
	                                <option value="male">Male</option>
	                                <option value="female">Female</option>
	                            </select>
	                            <div ng-if="$ctrl.accountForm.gender.$dirty">
	                            	<div ng-if="$ctrl.accountForm.gender.$error.required" class="help-block">Gender should be indicated.</div>
	                            </div>
	                        </div>

	                        <div class="form-group" ng-class="{'has-error': $ctrl.accountForm.phoneNumber.$invalid && $ctrl.accountForm.phoneNumber.$dirty}">
	                            <label for="phoneNumber">Phone number</label>
	                            <input
	                                type="text"
	                                class="form-control"
	                                id="phoneNumber"
	                                name="phoneNumber"
	                                placeholder="Phone number"
	                                ng-model="$ctrl.account.phoneNumber"
	                                ng-model-options="{updateOn: 'blur'}"
	                                minlength="9"
	                            	required
	                            />

	                            <div ng-messages="$ctrl.accountForm.phoneNumber.$error" class="help-block">
									<div ng-message="minlength">Phone number should contain at least 9 digits.</div>
									<div ng-message="pattern">Phone number should contain 10 digits.</div>
								</div>
	                        </div>

	                        <div class="form-group" ng-class="{'has-error': $ctrl.accountForm.email.$invalid && $ctrl.accountForm.email.$dirty}">
	                            <label for="inputEmail">Email address</label>
	                            <input
	                                type="email"
	                                class="form-control"
	                                id="inputEmail"
	                                placeholder="Email"
	                                name="email"
	                                ng-model="$ctrl.account.email"
	                                required>
	                            <div ng-messages="$ctrl.accountForm.email.$error" class="help-block">
									<div ng-message="minlength">Name should have at least 3 characters.</div>
									<div ng-message="pattern">Name should have only letters.</div>
								</div>
	                        </div>

	                        <div class="form-group" ng-class="{'has-error': $ctrl.accountForm.login.$invalid && $ctrl.accountForm.login.$dirty}">
	                            <label for="userLogin">Login</label>
	                            <input
	                                type="text"
	                                class="form-control"
	                                id="userLogin"
	                                name="login"
	                                placeholder="Login"
	                                ng-model="$ctrl.account.login"
	                                minlength="5"
	                                maxlength="15"
	                                ng-model-options="{updateOn: 'blur'}"
	                                required
	                            >
	                            <div ng-messages="$ctrl.accountForm.login.$error" ng-if="$ctrl.accountForm.login.$dirty" class="help-block">
	                                <div ng-message="required">Login is a mandatory field.</div>
									<div ng-message="minlength">Login should have at least 5 characters.</div>
									<div ng-message="maxlength">Login should have not more than 5 characters.</div>
								</div>
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
