(function () {
	'use strict';
    
    angular
      .module('selectApp', [])
      .controller('SelectController', function ($scope) {

        var selectCtrl = this;

        selectCtrl.theVar = "";
        selectCtrl.theVarSelect = ["one", "two", "three", "four", "five"];

        selectCtrl.updateValue = function(value) {
            if(selectCtrl.theVarSelect.indexOf(value) != -1) {
                selectCtrl.theVar = value;
            }
        };

        selectCtrl.addToSelect = function() {
            selectCtrl.theVarSelect.push("hello");
        };   
    });

})();