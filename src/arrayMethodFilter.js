'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const FilteredArray = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        FilteredArray.push(this[i]);
      }
    }

    return FilteredArray;
  };
}

module.exports = applyCustomFilter;
