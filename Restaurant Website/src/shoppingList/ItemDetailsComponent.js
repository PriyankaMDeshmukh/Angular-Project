(function () {
  angular.module('ShoppingListApp')
  .component('why',{
    templateUrl : 'src/shoppingList/templates/ItemDetailsComponent.html',
    bindings : {
      last : '<'
    }
  })
})()