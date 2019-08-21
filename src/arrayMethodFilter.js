'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filterArr = [];
    let countIndex = 0;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filterArr[countIndex] = this[i];
        countIndex++;
      }
    }

    return filterArr;
  };
}

module.exports = applyCustomFilter;
