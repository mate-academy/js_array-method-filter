'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const result = [];

    this.forEach((element, index, arr) => {
      if (callback(element, index, arr)) {
        result.push(element);
      }
    });

    return result;
  };
}

module.exports = applyCustomFilter;
