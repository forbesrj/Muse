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
    $scope.$parent.selectedEntity = {};
    $scope.suggestedEntities = [{'id': 90, 'description': 'J2'}, {'id': 91, 'description': 'E - PAY'},{'id':92, 'description': 'DIV 2012'}];
    $scope.moduleId = $routeParams.id;
    $scope.year = $routeParams.year;
    $scope.getEntities = function(){
        var formsInModule = $filter('filter')(entityfields, {typeId: $scope.moduleId}, 'true');

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
        var entitiesPerRow = 6;
        var result = [];
        $scope.entities = $filter('orderBy')($scope.entities, 'name', false);
        angular.forEach($scope.entities, function(entity){
            if(result.length == 0 || result[result.length - 1][0][0].name[0].toLowerCase() != entity.name[0].toLowerCase()){
                result.push([[entity]]);
                $scope.alphabet.push( entity.name[0].toUpperCase());
            } else{
                var currentRow = result[result.length - 1][result[result.length - 1].length -1];
                if(currentRow.length < entitiesPerRow){
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

app.controller('FieldsCtrl', function($scope, $rootScope, $routeParams, $filter, entities, entityfields, fields, atefields, modules, years, series){
    $scope.fields = [];
    $scope.$parent.selectedEntity = $filter('filter')(entities, {id: $routeParams.id}, 'true')[0];
    $scope.$parent.selectedModule = $filter('filter')(modules, {id: $routeParams.moduleId}, 'true')[0];
    $scope.$parent.selectedYear = $filter('filter')(years, {calendarYear: $routeParams.year}, 'true')[0];
    $scope.ateFields = [];
    $scope.series = [];

    $scope.getSeries = function(){
        $scope.series = [];
        angular.forEach($scope.$parent.selectedEntity.series, function(seriesId){
            angular.forEach($filter('filter')(series, {id: seriesId}, 'true'), function(result){
                $scope.series.push(result);
            })
        })
    };
    $scope.getSeries();

    $scope.getAteFields = function(){
        $scope.ateFields = [];
        angular.forEach($scope.series, function(s){
            angular.forEach($filter('filter')(atefields, {'seriesId': s.id}, 'true'), function(ateField){
                if($scope.ateFields.indexOf(ateField) < 0) {
                    ateField.seriesDescription = s.description;
                    $scope.ateFields.push(ateField);
                }
            });
        });
    };
    $scope.getAteFields();

    $scope.getFields = function(){
        $scope.fields = [];
        var fieldsInForm = $filter('filter')(entityfields, {formId: $routeParams.id}, 'true');

        angular.forEach(fields, function(field){
            if(($filter('filter')(fieldsInForm, {fieldId: field.id})).length > 0){
                $scope.fields.push(field);
            }
        });
    };
    $scope.getFields();

    $scope.addNewField = function(){
        $(".fields:last").after('<div class="row"> <div class="col-lg-3"><input type="text" name="newField" value="" /></div><div class="col-lg-3"><input type="text" name="newField" value="" /></div><div class="col-lg-3"><input type="text" name="newField" value="" /></div><div class="col-lg-3"><input type="text" name="newField" value="" /></div></div>');
    };

});

app.controller('EntityCtrl', function($scope, $routeParams, $filter, $location, entities, jurisdictions){
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

    $scope.addSeries = function(entity){
        $scope.save(entity);
        $location.path('/series/'+entity.id)
    }
});

app.controller('SeriesCtrl', function($scope, $routeParams, $filter, $location, series, entities){
    if(!$scope.$parent.selectedYear || !$scope.$parent.selectedModule){
        $location.path('/');
    }
    else {
        $scope.series = series;
        $scope.entityId = $routeParams.id;
        $scope.year = $scope.$parent.selectedYear.calendarYear;
        $scope.moduleId = $scope.$parent.selectedModule.id;
    }
});