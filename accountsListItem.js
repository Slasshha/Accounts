angular.module("accountsViewer").component("accountsListItem", {

    template: `
        <div class="accounts-item row">
            <div class="userpic-container col-md-2">
                <img class="userpic" ng-src="{{$ctrl.account.avatarUrl}}" width="75px">
            </div>
            <div class="col-md-6">
                <div class="account-info">
                    Account ID: {{$ctrl.account.id}}
                    Email: {{$ctrl.account.email}}
                    Login: {{$ctrl.account.login}}
                    Name: {{$ctrl.account.name}}
                </div>
                <div class="account-details" ng-if="$ctrl.showDetails">
                    Age: {{$ctrl.account.age}}
                    Gender: {{$ctrl.account.gender}}
                    Phone number: {{$ctrl.account.phoneNumber}}
                </div>
            </div>
            <div class="col-md-4">
                <button type="button" class="btn btn-primary update" ng-click="$ctrl.updateAccount(account)">Update</button>
                <button type="button" class="btn btn-primary delete md-primary md-raised" ng-click="$ctrl.showConfirm($ctrl.account.id)">Delete</button>
            </div>
        </div>
    `,

    bindings: {
        account: '<',
        showDetails: '<',
        showConfirm: '&'
    }
});
