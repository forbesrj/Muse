/**
 * Created by rforbes on 3/24/14.
 */

app.controller('ModuleCtrl', function($scope, $filter, $routeParams, entities, fields, years, modules){
    $scope.years = years;
    $scope.modules = modules;
    $scope.selectedYear =  ($filter("filter")(years, {current: true}))[0];
    $scope.selectedMenuItem = {};

    $scope.selectMenuItem = function(item){
        $scope.selectedMenuItem = item;
    };

    $scope.selectYear = function(year){
        $scope.selectedYear = $filter("filter")(years, {calendarYear: year})[0];
        $scope.selectedMenuItem = {};
    };
});

app.controller('EntitiesCtrl', function($scope, $routeParams, $filter, entities, entityfields){
    $scope.search = '';
    $scope.entities = [];
    $scope.moduleId = $routeParams.id;
    $scope.getEntities = function(){
        var formsInModule = $filter('filter')(entityfields, {typeId: $scope.moduleId});

        var foundEntities = [];
        angular.forEach(entities, function(entity){
            if(($filter('filter')(formsInModule, {formId: entity.id})).length > 0){
                foundEntities.push(entity);
            }
        });
        return foundEntities;
    };
    $scope.entities = $scope.getEntities();
    $scope.alphabet = [];
    $scope.getAlphabet = function(){
        var result = [];
        $scope.entities = $filter('orderBy')($scope.entities, 'name', false);
        angular.forEach($scope.entities, function(entity){
            if(result.length == 0 || result[result.length - 1][0].name[0].toLowerCase() != entity.name[0].toLowerCase()){
                result.push([entity]);
            } else{
                var currentRow = result[result.length - 1][result[result.length - 1].length -1];
                if(currentRow.length < 6){
                    currentRow.push(entity);
                } else{
                  result[result.length - 1].push([entity]);
                }
            }
        });
        return result;
    };
    $scope.alphabet = $scope.getAlphabet();

    $scope.addNewEntity = function(){
        $(".fields:last").after('<div class="col-md-2"><input type="text" placeholder="Entity " name="newField" value="" /></div>');
    };
});

app.controller('FieldsCtrl', function($scope, $routeParams, $filter, entities, entityfields, fields){
    $scope.fields = [];
    $scope.getFields = function(){
        var results = [];
        var fieldsInForm = $filter('filter')(entityfields, {formId: $routeParams.id});

        angular.forEach(fields, function(field){
            if(($filter('filter')(fieldsInForm, {fieldId: field.id})).length > 0){
                results.push(field);
            }
        });
        return results;
    };
    $scope.fields = $scope.getFields();

    $scope.addNewField = function(){
        $(".fields:last").after('<div class="row"> <div class="col-lg-3"><input type="text" name="newField" value="" /></div><div class="col-lg-3"><input type="text" name="newField" value="" /></div><div class="col-lg-3"><input type="text" name="newField" value="" /></div><div class="col-lg-3"><input type="text" name="newField" value="" /></div></div>');
    };

});

app.controller('EntityCtrl', function($scope, $routeParams, $filter, entities, jurisdictions){
    $scope.entity = {
        'id': $routeParams.id,
        'moduleId': $routeParams.moduleId,
        'name': null,
        'description': null,
        'jurisdictions': null
    };
    $scope.jurisdictions = jurisdictions;

    $scope.save = function(entity){
        //TODO Save added or updated entity MAKE SURE TO TRIM TEXT FIELDS!!!
    };
});