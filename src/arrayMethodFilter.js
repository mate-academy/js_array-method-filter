'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const modifiedArr = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        modifiedArr.push(this[i]);
      }
    }

    return modifiedArr;
  };
}

module.exports = applyCustomFilter;
