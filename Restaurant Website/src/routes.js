(function () {
  angular.module('ShoppingListApp')
  .config(doSomething);
  doSomething.$inject = ['$stateProvider', '$urlRouterProvider'];
  function doSomething($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home',{
      url : '/',
      templateUrl : 'src/shoppinglist/templates/homePage.html'
    })
    .state('fullList',{
      url : '/fullList-url',
      templateUrl : 'src/shoppinglist/templates/fullList.html',
      controller : 'ShoppingListController as SLCon',
      resolve : {
        myItm : ['ShoppingListService', function (ShoppingListService) {
          return ShoppingListService.getMyItems();
        }]
      }
    })
    .state('itemDetail',{
      url : '/item-Detail/{categoryShortName}',
      templateUrl : 'src/shoppinglist/templates/IndividualItemDetails.html',
      controller : 'ItemDetailController as itemDetail',
      resolve : {
        ItmD: ['$stateParams','ShoppingListService', function ($stateParams,ShoppingListService) {
          console.log($stateParams);
          return ShoppingListService.getMyItemD($stateParams.categoryShortName);
        }]
      }
    })
  }
})()
