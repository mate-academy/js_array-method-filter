'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filterElements = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filterElements.push(this[i]);
      }
    }

    return filterElements;
  };
}

module.exports = applyCustomFilter;
