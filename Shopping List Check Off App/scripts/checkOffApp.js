(function () {
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
  ToBuyController.$inject=['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var tobuycon=this;
    tobuycon.tobuyList = ShoppingListCheckOffService.getToBuyList();
    tobuycon.addToboughtList=function(itemIndex) {
      ShoppingListCheckOffService.addToboughtList(itemIndex);
    }
  }
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtcon=this;
    boughtcon.boughtList=ShoppingListCheckOffService.getToBoughtList();
  }
  function ShoppingListCheckOffService() {
    var service=this;
      var tobuyList=[ {name:"Shampoo",quantity:1},
                      {name:"Toothpaste",quantity:3},
                      {name:"Facewash",quantity:2},
                      {name:"Biscuits",quantity:10},
                      {name:"Ribbons",quantity:3}
  ];
  var boughtList=[];
  service.getToBuyList=function(){
    return tobuyList;
  };

  service.getToBoughtList=function(){
    return boughtList;
  };
  service.addToboughtList=function (itemIndex) {
    boughtList.push(tobuyList[itemIndex]);
    tobuyList.splice(itemIndex,1);
  }
}
})()
