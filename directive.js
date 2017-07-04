app.directive('headerDirective', function(){
	return {
		restrict: 'E',
		templateUrl: './src/html/header.html',
		controller: function($scope,$css){
			$css.bind({
				href: './src/css/header.css'
			},$scope);
		}
	}
});
app.directive('addremoveDirective', function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: './src/html/add-remove.html',
		controller: function($scope,$css){
			$css.bind({
				href: './src/css/add-remove.css'
			},$scope);
		}
	}
})
app.directive('repeatFinished', function(){
	return {
		restrict: 'ECMA',
		controller: function($scope){
			$scope.$emit('ngRepeatFinished');
		}
	}
})