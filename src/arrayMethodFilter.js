'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const newArray = [];
    let index = 0;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArray[index] = this[i];
        index++;
      }
    }
    return newArray;
  };
}

module.exports = applyCustomFilter;
