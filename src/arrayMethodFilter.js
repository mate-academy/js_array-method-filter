'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const result = [];
    const arr = this;
    arr.forEach((item, index) => {
      if (callback(item, index, arr) === true) {
        result.push(item);
      }
    });
    return result;
  };
}

module.exports = applyCustomFilter;
