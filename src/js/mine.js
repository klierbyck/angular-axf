app.controller('MineCtrl', ['$scope','$css','GoodsService','$state','$rootScope', function($scope,$css,GoodsService,$state,$rootScope){
	$css.bind({
		href: './src/css/mine.css'
	}, $scope);
	$rootScope.cla=$state.$current.name;
}])