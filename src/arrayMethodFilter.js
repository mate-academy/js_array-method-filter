'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filteredValues = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filteredValues[filteredValues.length] = this[i];
      }
    }

    return filteredValues;
  };
}

module.exports = applyCustomFilter;
