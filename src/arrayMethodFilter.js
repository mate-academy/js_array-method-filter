'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filteredCopy = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filteredCopy[filteredCopy.length] = this[i];
      }
    }
    return filteredCopy;
  };
}

module.exports = applyCustomFilter;
