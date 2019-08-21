'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filteredArr = [];
    let countIndex = 0;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filteredArr[countIndex] = this[i];
        countIndex++;
      }
    }

    return filteredArr;
  };
}

module.exports = applyCustomFilter;
