'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const FilterArr = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        FilterArr.push(this[i]);
      }
    }
    return FilterArr;
  };
}

module.exports = applyCustomFilter;
