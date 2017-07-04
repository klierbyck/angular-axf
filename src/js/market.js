app.controller('MarketCtrl', ['$scope','$css','$http','GoodsService','$state','$rootScope', function($scope,$css,$http,GoodsService,$state,$rootScope){
	$css.bind({
		href: './src/css/market.css'
	}, $scope);
	//获取当前路由页面并赋值给cla
	$rootScope.cla=$state.$current.name;
	//获取数据
	$http.get('./static/data/data.json')
	.then(function(res){
		//分类
		$scope.category = res.data.data.categories;
		//显示第一类对应的商品
		$scope.goods = res.data.data.products[$scope.category[0].id];
		//所有商品
		$scope.products = res.data.data.products;
		//点击分类选择对应商品
		GoodsService.showGoods()
		$scope.chooseGoods = function(){
			//点击当前行获取行号
			$scope.curIndex = this.$index;
			//通过行号拿到对应商品种类的id
			var key = $scope.category[this.$index].id;
			//获得对应商品种类
			$scope.goods = $scope.products[key];
		}
		
		for(var i=0;i<$scope.goods.length;i++){
			var obj =$scope.goods[i];
			(GoodsService.showGoods()).map(function(val){
				if(obj.id  == val[0].id){
					obj.count = val[1];
					return;
				}
			});
		}
	});
	var total=0,money=0;
	//增加商品
	$scope.buy = function(){
		//将该商品加入
		GoodsService.add(this.item);

		//给商品添加count属性
		var obj =this.item;
		(GoodsService.showGoods()).map(function(val){
			if(obj.id  == val[0].id){
				obj.count = val[1];
				return;
			}
		});
		total=0;
		claNum();
		money=0;
		claMoney();
	}
	//减少商品
	$scope.nobuy = function(){
		GoodsService.reduce(this.item.id);
		//给商品添加count属性
		var obj =this.item;
		if(obj.count == 1){
			obj.count = 0;
		}else{
			(GoodsService.showGoods()).map(function(val){
				if(obj.id  == val[0].id){
					obj.count = val[1];
					console.log(obj.count)
					return;
				}
			});
		}
		total=0;
		claNum();
		money=0;
		claMoney();
	}

	//计算价格函数
	function claNum(){
		for(var i=0;i<GoodsService.showGoods().length;i++){
			total +=GoodsService.showGoods()[i][1]
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