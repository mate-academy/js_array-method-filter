'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const array = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        array[array.length] = this[i];
      }
    }

    return array;
  };
}

module.exports = applyCustomFilter;
