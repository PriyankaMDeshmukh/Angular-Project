(function () {
  angular.module('ShoppingListApp')
  .component('shop',{
    templateUrl:'src/shoppinglist/templates/ShoppingListComponent.html',
    bindings:{
      itemss:'<'
    }
  })
})()
