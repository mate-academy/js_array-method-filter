'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filterdeElements = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filterdeElements[filterdeElements.length] = this[i];
      }
    }

    return filterdeElements;
  };
}

module.exports = applyCustomFilter;
