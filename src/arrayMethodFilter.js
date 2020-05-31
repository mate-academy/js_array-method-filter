'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filterdArray = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filterdArray.push(this[i]);
      }
    }

    return filterdArray;
  };
}

module.exports = applyCustomFilter;
