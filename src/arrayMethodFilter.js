'use strict';

/**
 * Implement method Filter
 */

function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filterArray = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filterArray.push(this[i]);
      }
    }

    return filterArray;
  };
}

module.exports = applyCustomFilter;
