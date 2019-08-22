'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const arrayAfterFilter = [];

    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i], i, this)) {
        arrayAfterFilter[arrayAfterFilter.length] = this[i];
      }
    }

    return arrayAfterFilter;
  };
}

module.exports = applyCustomFilter;
