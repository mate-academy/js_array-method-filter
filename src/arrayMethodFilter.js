'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filterArray = [];
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filterArray[counter] = this[i];
        counter++;
      }
    }

    return filterArray;
  };
}

module.exports = applyCustomFilter;
