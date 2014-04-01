/**
 * Created by rforbes on 3/24/14.
 */


describe('Muse Tests', function(){
    var formCtrl;
    beforeEach(module('museApp'))
    beforeEach(inject(function($rootScope, $controller, serviceApp){
        var scope = $rootScope.new()
        formnCtrl = $controller("FormCtrl", {$scope: scope, forms: serviceApp.forms, fields: serviceApp.fields});
    }));
    describe('FormCtrl', function(){
        it('should get all the fields on selectform', function(){
            scope.selectform({'id': 1, 'type': 'W2'});
            expect(scope.fields.length).toBe(5);
        })
    })
})