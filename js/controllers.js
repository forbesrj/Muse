/**
 * Created by rforbes on 3/24/14.
 */
var app = angular.module('museApp', ['dataServices']);

app.controller('FormCtrl', function($scope, $filter, entities, fields, years, modules, series, formfields){
    $scope.entities = [];
    $scope.years = years;
    $scope.modules = modules;
    $scope.selectedYear = 2013;
    $scope.selectedModule = null;
    $scope.selectedMenuItem = {};
    $scope.fields = [];

    $scope.selectEntity = function(entity){
        $scope.selectedEntity = entity;
        $scope.fields = [];
        var fieldsInForm = $filter('filter')(formfields, {formId: entity.id, typeId: $scope.selectedModule.id});

        angular.forEach(fields, function(field){
            if(($filter('filter')(fieldsInForm, {fieldId: field.id})).length > 0){
                $scope.fields.push(field);
            }
        });
    };

    $scope.selectMenuItem = function(item){
        $scope.selectedMenuItem = item;
        if(item != 'year'){
            $scope.selectedModule = $filter("filter")(modules, {id: item})[0];
            var formsInModule = $filter('filter')(formfields, {typeId: item});

            $scope.entities = [];
            angular.forEach(entities, function(entity){
                if(($filter('filter')(formsInModule, {formId: entity.id})).length > 0){
                    $scope.entities.push(entity);
                }
            });
            $scope.fields = [];
        }
    };

    $scope.selectYear = function(year){
        $scope.selectedYear = year;
        $scope.selectedMenuItem = {};
    };

    $scope.addNewField = function(){
        $(".fields:last").after('<div class="row"> <div class="col-lg-4"><input type="text" name="newField" value="" /></div><div class="col-lg-4"><input type="text" name="newField" value="" /></div><div class="col-lg-4"><input type="text" name="newField" value="" /></div></div>');
    };
});