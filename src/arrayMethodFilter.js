'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filterArr = [];
    for (let index = 0; index < this.length; index++) {
      if (callback(this[index], index, this) === true) {
        filterArr[filterArr.length] = this[index];
      }
    }
    return filterArr;
  };
}

module.exports = applyCustomFilter;
