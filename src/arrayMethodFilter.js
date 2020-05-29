'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }

    return result;
  };
}

// applyCustomFilter();
// console.log([0, 10, 20, 30].filter2(x => x > 10));
module.exports = applyCustomFilter;
