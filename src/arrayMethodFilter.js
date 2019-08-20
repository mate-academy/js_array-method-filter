'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filter2Arr = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filter2Arr.push(this[i]);
      }
    }
    return filter2Arr;
  };
}

module.exports = applyCustomFilter;
