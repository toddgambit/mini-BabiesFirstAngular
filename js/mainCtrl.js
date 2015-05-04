var app = angular.module('friendsList');

app.controller('mainCtrl',function($scope){
	$scope.friendship = ['Kevbo','Excelsior',"Jambeam","Largis","Noggers"];

	function addFriend(amigo){
		$scope.friendship.push(amigo);
	}

	$('#friend-fellow').on('click',function(){
		$scope.friendship.push('Nothanks');
		console.log($scope.friendship);
	});
});