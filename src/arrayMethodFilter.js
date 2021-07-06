'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const arr = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        arr[arr.length] = this[i];
      }
    }

    return arr;
  };
}
module.exports = applyCustomFilter;
