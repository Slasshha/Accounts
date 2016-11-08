angular.module("accountsViewer").component("accountsList", {

	/*
	templateUrl: "accounts_list.html",
	bindings: {
		accounts: '<'

	} */


	template: '<div class="list-container">\
    <ul class="accounts-list">\
        <li ng-repeat="item in $ctrl.accounts" class="accounts-item">\ 
        	<img ng-src="{{item.avatarUrl}}">\ 
        	<div>{{item.accountId}} </div>\
        	<div>{{item.email}} </div>\
        	<div>{{item.login}} </div>\
        	<div>{{item.name}} </div>\
        </li>\
    </ul>\
</div>'

});