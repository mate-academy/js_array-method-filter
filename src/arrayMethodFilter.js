'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const arr = this;
    const result = [];
    let count = 0;

    for (const item of arr) {
      if (callback(item, count, arr)) {
        result.push(item);
      }
      count++;
    }

    return result;
  };
}

module.exports = applyCustomFilter;
