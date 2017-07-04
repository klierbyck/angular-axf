app.service('GoodsService',['myarray', function(myarray){
	var arr = [],arr1 = [],narr = [];
	this.add = function(item){
		arr.push(item);
		arr1 = myarray.unique(arr);
	};
	this.reduce = function(idnum){
		for(var i=0;i<arr.length;i++){
			if(arr[i].id == idnum){
				arr.splice(i,1);
				break;
			}
		}
		arr1 = myarray.unique(arr);
	}
	this.showGoods = function(){
		return arr1;
	}
}])
