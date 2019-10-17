'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filterResults = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filterResults[filterResults.length] = this[i];
      }
    }
    return filterResults;
  };
}

module.exports = applyCustomFilter;
