angular.module("accountsViewer").component("accountsListItem", {

    template: `
        <div class="accounts-item" style="margin: 20px">
            <div>
                <img ng-src="{{$ctrl.account.avatarUrl}}" width="75px">
                Account ID: {{$ctrl.account.accountId}}
                Email: {{$ctrl.account.email}}
                Login: {{$ctrl.account.login}}
                Name: {{$ctrl.account.name}}
            </div>

            <div class="accountDetails" ng-if="$ctrl.showDetails">
                Age: {{$ctrl.account.age}}
                Gender: {{$ctrl.account.gender}}
                Phone number: {{$ctrl.account.phone}}
            </div>
        </div>
    `,

    bindings: {
        account: '<',
        showDetails: '<'
    }
});
