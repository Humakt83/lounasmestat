'use strict'

angular.module('lounasmestat', ['ui.bootstrap']).config(function($sceProvider) {
	$sceProvider.enabled(false);
})

angular.module('lounasmestat').controller('MainController', ['$scope', '$modal', '$sce', function($scope, $modal) {
		
	$scope.lounasmestat = [];
	
	$scope.addMestaDialog = function() {
		var modalInstance = $modal.open({
			templateUrl: './partials/addmestadialog.html',
			controller: 'AddMestaDialog'
		})

        modalInstance.result.then(function (result) {
			$scope.lounasmestat.push(result)
		})
	}
}])

angular.module('lounasmestat').controller('AddMestaDialog', ['$scope', '$modalInstance', 'LounasColor', function ($scope, $modalInstance, LounasColor) {
    $scope.save = function() {
		$modalInstance.close({name : $scope.lounasmesta, url : $scope.lounasurl, color : LounasColor.randomColor()})
	}
}])

angular.module('lounasmestat').factory('LounasColor', function() {
	
	function LounasColor(red, green, blue) {
		this.red = red
		this.green = green
		this.blue = blue
		
		this.sumOfColors = function() {
			return this.red + this.green + this.blue
		}
		this.toStyle = function() {
			var fontColor = this.sumOfColors() < 400 ? 'white': 'black'
			return {
				'background': 'rgb(' + this.red + ',' + this.green + ',' + this.blue + ')',
				'color': fontColor};
		}
	}
	
	return {
		randomColor : function() {
			function randomVal() { 
				return Math.floor((Math.random() * 255) + 1) 
			}
			return new LounasColor(randomVal(), randomVal(), randomVal())
		}
	}
})