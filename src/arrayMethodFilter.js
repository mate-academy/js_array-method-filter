'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    // write code here
    const res = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        res.push(this[i]);
      }
    }

    return res;
  };
}

module.exports = applyCustomFilter;
