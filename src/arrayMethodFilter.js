'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filteredArray = [];

    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i], i, this)) {
        filteredArray[filteredArray.length] = this[i];
      }
    }

    return filteredArray;
  };
}

module.exports = applyCustomFilter;
