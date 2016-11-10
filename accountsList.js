angular.module("accountsViewer").component("accountsList", {

	/*
	templateUrl: "accounts_list.html",
	bindings: {
		accounts: '<'

	} */


	template: '<div class="list-container">\
    <ul class="accounts-list">\
            <li ng-repeat="item in $ctrl.accounts" class="accounts-item" style="margin: 20px" ng-click="$ctrl.expandDetails()">\
        	<div><img ng-src="{{item.avatarUrl}}" width="75px"> Account ID: {{item.accountId}} Email: {{item.email}} Login: {{item.login}} Name: {{item.name}}  </div>\
        	<div class="accountDetails" ng-if="item.shown"> Age: {{item.age}}  Gender: {{item.gender}}  Phone number: {{item.phone}} </div>\
        	</li>\
    </ul>\
</div>',

    bindings: {
		accounts: '<',
		expandDetails: '&'
	} 

});