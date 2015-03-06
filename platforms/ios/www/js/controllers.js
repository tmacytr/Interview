angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})



.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})



.controller('RemindsCtrl', function($scope,  Reminders) {
    $scope.reminders = Reminders.all();
    $scope.addRemind = function () {
     	$state.go('tab.remind-detail', {});
        }
})

.controller('RemindDetailCtrl', function($scope, $stateParams, Reminders) {
  $scope.reminder = Reminders.get($stateParams.reminderId);
})
.controller('ReminderAdd', function($scope) {
})


.controller('LibraryCtrl', function($scope) {});





