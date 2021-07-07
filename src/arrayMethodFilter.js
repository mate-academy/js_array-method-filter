'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArray[i] = this[i];
      }
    }

    return Object.values(newArray);
  };
}

module.exports = applyCustomFilter;
