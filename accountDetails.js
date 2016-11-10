angular.module("accountsViewer").component("accountDetails", {

	/*
	templateUrl: "account_details.html",
	bindings: {
		accountDetails: '<'

	} */


	template: '<div class="list-container">\
    <ul class="accounts-list">\
        <li ng-repeat="item in $ctrl.accounts" class="accounts-item" style="margin: 20px">\
        	<div><img ng-src="{{item.avatarUrl}}" width="75px"> Account ID: {{item.accountId}} Email: {{item.email}} Login: {{item.login}} Name: {{item.name}}  </div>\
        	<div> </div>\
        	</li>\
    </ul>\
</div>',

    bindings: {
		accounts: '<'

	}

});
