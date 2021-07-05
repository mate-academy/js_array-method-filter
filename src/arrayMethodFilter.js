'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArray[newArray.length] = this[i];
      }
    }
    return newArray;
  };
}

module.exports = applyCustomFilter;
