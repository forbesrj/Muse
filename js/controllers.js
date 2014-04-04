/**
 * Created by rforbes on 3/24/14.
 */

app.controller('ModuleCtrl', function($scope, $filter, $routeParams, entities, fields, years, modules){
    $scope.years = years;
    $scope.modules = modules;
    $scope.selectedYear =  ($filter("filter")(years, {current: true}))[0];
    $scope.selectedMenuItem = {};
    $scope.selectedModule = null;
    $scope.selectedEntity = null;

    $scope.selectMenuItem = function(item){
        $scope.selectedMenuItem = item;
        if(item != 'year'){
            $scope.selectedModule = $filter('filter')(modules, {id: item}, 'true')[0];
        }
    };

    $scope.selectYear = function(year){
        $scope.selectedYear = $filter("filter")(years, {calendarYear: year})[0];
        $scope.selectedMenuItem = {};
    };
});

app.controller('EntitiesCtrl', function($scope, $routeParams, $filter, $location, $anchorScroll, entities, entityfields){
    $scope.$parent.selectedEntity = null;
    $scope.search = '';
    $scope.entities = [];
    $scope.moduleId = $routeParams.id;
    $scope.year = $routeParams.year;
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
    $scope.groupedEntities = [];
    $scope.getGroupedEntities = function(){
        var result = [];
        $scope.entities = $filter('orderBy')($scope.entities, 'name', false);
        angular.forEach($scope.entities, function(entity){
            if(result.length == 0 || result[result.length - 1][0][0].name[0].toLowerCase() != entity.name[0].toLowerCase()){
                result.push([[entity]]);
                $scope.alphabet.push( entity.name[0].toUpperCase());
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
    $scope.groupedEntities = $scope.getGroupedEntities();

    $scope.addNewEntity = function(){
        $(".fields:last").after('<div class="col-md-2"><input type="text" placeholder="Entity " name="newField" value="" /></div>');
    };

    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
    };
});

app.controller('FieldsCtrl', function($scope, $rootScope, $routeParams, $filter, entities, entityfields, fields, modules, years){
    $scope.fields = [];
    $scope.$parent.selectedEntity = $filter('filter')(entities, {id: $routeParams.id}, 'true')[0];
    $scope.$parent.selectedModule = $filter('filter')(modules, {id: $routeParams.moduleId}, 'true')[0];
    $scope.$parent.selectedYear = $filter('filter')(years, {calendarYear: $routeParams.year}, 'true')[0];

    $scope.getFields = function(){
        var results = [];
        var fieldsInForm = $filter('filter')(entityfields, {formId: $routeParams.id}, 'true');

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
    var foundEntity = $filter('filter')(entities, {id: $routeParams.id}, 'true')[0];
    $scope.entity = {
        'id': $routeParams.id,
        'moduleId': $routeParams.moduleId,
        'name': foundEntity.name,
        'description': foundEntity.description,
        'jurisdictions': foundEntity.jurisdictions
    };
    $scope.jurisdictions = jurisdictions;

    $scope.save = function(entity){
        //TODO Save added or updated entity MAKE SURE TO TRIM TEXT FIELDS!!!
    };
});