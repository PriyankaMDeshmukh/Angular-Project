(function () {
  angular.module('ShoppingListApp')
  .component('why',{
    templateUrl : 'src/shoppinglist/templates/ItemDetailsComponent.html',
    bindings : {
      last : '<'
    }
  })
})()
