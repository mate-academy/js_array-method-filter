'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const FilterArr = [];
    let count = 0;
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === true) {
        FilterArr[count++] = this[i];
      }
    }
    return FilterArr;
  };
}

module.exports = applyCustomFilter;
