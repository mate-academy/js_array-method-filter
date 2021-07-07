'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    // write code here
    const arr = this;
    const res = [];

    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr) === true) {
        res.push(arr[i]);
      }
    }

    return res;
  };
}

module.exports = applyCustomFilter;
