'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const newArr = [];
    for (const [index] of this.entries()) {
      if (callback(this[index], index, this)) {
        newArr[newArr.length] = this[index];
      }
    }
    return newArr;
  };
}

module.exports = applyCustomFilter;
