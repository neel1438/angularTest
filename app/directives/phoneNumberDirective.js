define(['angular'],function(angular) {
    angular.module("app").directive('phoneNumber', ['$browser' , function($browser) {
        function formatValue(number) {
            if (!number) {
                return '';
            }

            number = String(number);
            var formattedNumber = number;
            var c = (number[0] == '1') ? '1 ' : '';
            number = number[0] == '1' ? number.slice(1) : number;
            var area = number.substring(0, 3);
            var front = number.substring(3, 6);
            var end = number.substring(6, 10);
            if (front) {
                formattedNumber = (c + "(" + area + ") " + front);
            }
            if (end) {
                formattedNumber += ("-" + end);
            }
            return formattedNumber;
        }

        function parseValue(value) {
            var numb = "";
            value = value.toString();
            if (value) {
                numb = value.match(/\d/g);
                if (numb) {
                    numb = numb.join("");
                }
            }
            return numb;
        }
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                var listener = function() {
                    var value = element.val().replace(/[^0-9]/g, '');
                    element.val(formatValue(value));
                };
                ngModel.$parsers.push(function(viewValue) {
                    return parseValue(viewValue);
                });
                ngModel.$render = function() {
                    element.val(formatValue(ngModel.$viewValue));
                };
                element.bind('change', listener);
                element.bind('keydown', function(event) {
                    var key = event.keyCode;
                    if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)) {
                        return;
                    }
                    $browser.defer(listener);
                });

                element.bind('paste cut', function() {
                    $browser.defer(listener);
                });
            }
        };
    }]);
});
