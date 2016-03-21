if (typeof Object.assign != "function")
  (function () {
    Object.assign = function (target) {
      "use strict";
      if (target === undefined || target === null)
        throw new TypeError("Cannot convert undefined or null to object");

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null)
          for (var nextKey in source)
            if (source.hasOwnProperty(nextKey))
              output[nextKey] = source[nextKey];
      }
      return output;
    };
  })();

if (typeof Object.lightAssign != "function")
  (function () {
    Object.lightAssign = function (target) {
      "use strict";
      if (target === undefined || target === null)
        throw new TypeError("Cannot convert undefined or null to object");

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null)
          for (var nextKey in source)
            if (source.hasOwnProperty(nextKey) && nextKey[0] !== "_")
              output[nextKey] = source[nextKey];
      }
      return output;
    };
  })();