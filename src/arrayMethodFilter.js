'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    // write code here
    const finalArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        finalArray[finalArray.length] = this[i];
      }
    }
    return finalArray;
  };
}

module.exports = applyCustomFilter;
