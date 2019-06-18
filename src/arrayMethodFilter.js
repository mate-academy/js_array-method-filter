'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const changedArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === true) {
        changedArray[changedArray.length] = this[i];
      }
    }
    return changedArray;
  };
}

module.exports = applyCustomFilter;
