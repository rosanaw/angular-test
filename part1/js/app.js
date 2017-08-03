(function () {
	'use strict';
    
    angular
      .module('selectApp', [])
      .controller('SelectController', function ($scope) {

        var selectCtrl = this;

        selectCtrl.theVar = "";
        selectCtrl.theVarInput = "";
        selectCtrl.theVarSelect = ["one", "two", "three", "four", "five"];
        selectCtrl.selectedOption = "";

        selectCtrl.updateValue = function(value) {
            selectCtrl.theVar = value;
            selectCtrl.theVarInput = value;
            if(selectCtrl.theVarSelect.indexOf(value) != -1) {
                selectCtrl.selectedOption = value;
            }
        };

        selectCtrl.addToSelect = function() {
            selectCtrl.theVarSelect.push("hello");
        };   
    });

})();