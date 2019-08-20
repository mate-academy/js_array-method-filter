'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const resultArr = [];
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        resultArr[counter] = this[i];
        counter++;
      }
    }

    return resultArr;
  };
}

module.exports = applyCustomFilter;
