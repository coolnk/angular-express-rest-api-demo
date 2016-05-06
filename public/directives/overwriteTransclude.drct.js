angular.module('app').directive("overwriteTransclude",overwriteTransclude);

function overwriteTransclude(){
    return {
        transclude:true,
        link: function($scope, $element, $attrs, $ctrl, $transclude) {
            $transclude(function(clone) {
                var pTag = angular.element(clone[1]);
                pTag.append(angular.element("<strong> - and this is from the overwrite.</strong>"));
                $element.append(pTag);
            })
        }
    };    
}