'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {

    const result = [];

    this.forEach((element, i, arr) => {

      if(callback(element, i, arr)) {
        result.push(element);
      }
    });

    return result;
  };
}

module.exports = applyCustomFilter;
