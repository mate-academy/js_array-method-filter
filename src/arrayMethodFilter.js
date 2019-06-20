'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filteredArray = [];

    for (let i = 0; i < this.length; i++) {
      const item = this[i];

      if (callback(item, i, this) === true) {
        filteredArray[filteredArray.length] = item;
      }
    }

    return filteredArray;
  };
}

module.exports = applyCustomFilter;
