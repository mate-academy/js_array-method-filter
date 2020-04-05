'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const result = [];
    let index = 0;

    for (const item of this) {
      if (callback(item, index, this)) {
        result.push(item);
      }
      index++;
    }

    return result;
  };
}

module.exports = applyCustomFilter;
