'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    if (this.length === 0) {
      return [];
    }

    const filteredArray = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filteredArray.push(this[i]);
      }
    }

    return filteredArray;
  };
}

module.exports = applyCustomFilter;
