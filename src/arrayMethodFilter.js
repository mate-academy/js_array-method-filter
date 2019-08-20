'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    // write code here
    const arrFilter = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        arrFilter.push(this[i]);
      }
    }
    return arrFilter;
  };
}

module.exports = applyCustomFilter;
