'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    let result = [];
    this.forEach(function(item, i, thisArr) {
      if (callback(item, i, thisArr)) {
        result.push(item);
      }
    });
    return result;
  };
}

module.exports = applyCustomFilter;
