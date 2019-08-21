'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
      const condition = callback(this[i], i, this);
      if (condition) {
        arr[arr.length] = this[i];
      }
    }
    return arr;
  };
}

module.exports = applyCustomFilter;
