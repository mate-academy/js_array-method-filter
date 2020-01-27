'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filtredArray = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filtredArray[filtredArray.length] = this[i];
      }
    }

    return filtredArray;
  };
}

module.exports = applyCustomFilter;
