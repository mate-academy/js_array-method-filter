'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArray = [...newArray, this[i]];
      }
    }

    return newArray;
  };
}

module.exports = applyCustomFilter;
