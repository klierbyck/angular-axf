app.controller('HomeCtrl', ['$scope','$css','$http','$state','$rootScope', function($scope,$css,$http,$state,$rootScope){
	$css.bind({
		href: './src/css/home.css'
	}, $scope);
	$rootScope.cla=$state.$current.name;
	$http.get('./static/data/home.json')
	.then(function(res){
		$scope.one = res.data.data.act_info[0].act_rows;
		$scope.two = res.data.data.act_info[1].act_rows;
		$scope.three = res.data.data.act_info[2].act_rows;
		$scope.four = res.data.data.act_info[3].act_rows;
		$scope.five0 = res.data.data.act_info[4].act_rows[0].act_rows;
		$scope.five1 = res.data.data.act_info[4].act_rows[1].act_rows;
		$scope.five2 = res.data.data.act_info[4].act_rows[2].act_rows;
		$scope.five3 = res.data.data.act_info[4].act_rows[3].act_rows;
		$scope.six = res.data.data.act_info[5].act_rows;
		// console.log($scope.three)
		// console.log($scope.six)
	});
	$scope.$on('ngRepeatFinished',function(){
		var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        autoplay: 2000,
	        speed: 700
	    });
	})
}])