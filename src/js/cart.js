app.controller('CartCtrl', ['$scope','$css','GoodsService','$state','$rootScope', function($scope,$css,GoodsService,$state,$rootScope){
	$css.bind({
		href: './src/css/cart.css'
	}, $scope);
	$rootScope.cla=$state.$current.name;
	
	$scope.goods = GoodsService.showGoods();
	//增加商品
	var total=0,money=0;
	$scope.buy = function(){
		GoodsService.add(this.item[0]);
		$scope.goods = GoodsService.showGoods();
		total=0;
		claNum();
		money=0;
		claMoney();
	}
	//减少商品
	$scope.nobuy = function(){
		GoodsService.reduce(this.item[0].id);
		$scope.goods = GoodsService.showGoods();
		total=0;
		claNum();
		money=0;
		claMoney();
	}
	//计算数量函数
	function claNum(){
		for(var i=0;i<$scope.goods.length;i++){
			total +=$scope.goods[i][1]
		}
		$rootScope.num = total;
	}
	//计算价格
	function claMoney(){
		for(var i=0;i<GoodsService.showGoods().length;i++){
			money +=GoodsService.showGoods()[i][0].price*GoodsService.showGoods()[i][1]
		}
		$rootScope.money = money;
	}
}])