/**
 * Created by rforbes on 4/3/14.
 */
var PASCAL_REGEXP = /^[A-Z][A-Za-z]*$/;
app.directive('pascal', function(){
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl){
            ctrl.$parsers.unshift(function(viewValue){
                if(PASCAL_REGEXP.test(viewValue)){
                    ctrl.$setValidity('pascal', true);
                    return viewValue;
                }else {
                    ctrl.$setValidity('pascal', false);
                    return undefined;
                }
            })
        }
    }
});