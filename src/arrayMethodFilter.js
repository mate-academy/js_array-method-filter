'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const newArray = [];

    this.forEach((item, index, arr) => callback(item, index, arr)
      ? newArray.push(item) : item);

    return newArray;
  };
}

module.exports = applyCustomFilter;
