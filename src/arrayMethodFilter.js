'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filteredArr = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === true) {
        filteredArr[filteredArr.length] = this[i];
      }
    };
    return filteredArr;
  };
}

module.exports = applyCustomFilter;
