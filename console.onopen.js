(function(console) {
  'use strict';

  console.onopen = function (callback) {
    var re = /x/;

    re.toString = function() {
      re.toString = function() {
        callback && callback();
        return '';
      };
    };

    console.log(re);
  };

})(console);
