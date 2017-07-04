app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider,$stateProvider) {
	//配置默认路由
	$urlRouterProvider
	.when('', 'home')
	//配置其他路由
	$stateProvider
	.state('home',{
		url: '/home',
		templateUrl: 'src/html/home.html',
		controller: 'HomeCtrl'
	})
	.state('market',{
		url: '/market',
		templateUrl: 'src/html/market.html',
		controller: 'MarketCtrl'
	})
	.state('cart',{
		url: '/cart',
		templateUrl: 'src/html/cart.html',
		controller: 'CartCtrl'
	})
	.state('mine',{
		url: '/mine',
		templateUrl: 'src/html/mine.html',
		controller: 'MineCtrl'
	})
	
}])