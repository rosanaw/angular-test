(function () {
	'use strict';
    
    angular
      .module('myApp', [])
      .controller('MyCtrl', function ($scope) {
        $scope.the = {
          var: "one",
          var2: "two",
          array: ["one", "two", "three", "four", "five"]
        };      
      })
      .directive('theVar', function(){
        return {
            restrict: 'E',
            template: `
                <form ng-submit="addToSelect()">        
                    <p>The var: {{ ngModel }}</p>
                    <p>The var input:  
                        <input type="text" ng-model="ngModel" ng-change="updateValue(ngModel)" size="30">   
                    </p>
                    <p>The var select: 
                        <select ng-options="option for option in options" ng-model="ngModel" ng-change="updateValue(selectedOption)"></select>
                    </p>      
                    <p>Select size: {{ options.length }} </p>
                    <input type="submit" value="Add to select">
                </form>          
            `,
            scope: {
                ngModel: '=',
                options: '='
            },
            link: function(scope, element, attrs){
              
                scope.updateValue = function(value){
                    if(scope.options.indexOf(value) != -1) {
                        scope.ngModel = value;
                    }
                };

                scope.addToSelect = function() {                   
                   scope.options.push("hello");
                }; 
            }
        };
     });    

})();
