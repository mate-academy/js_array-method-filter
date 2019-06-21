'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const resArray = [];
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
      const item = this[i];
      if (callback(item, i, arr) === true) {
        resArray[resArray.length] = item;
      }
    }
    return resArray;
  };
}

module.exports = applyCustomFilter;
