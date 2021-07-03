'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filterArr = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filterArr.push(this[i]);
      }
    }

    return filterArr;
  };
}

module.exports = applyCustomFilter;
