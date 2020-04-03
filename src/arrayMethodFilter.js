'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const items = this;
    const arr = [];

    for (let i = 0; i < items.length; i++) {
      if (callback(items[i], i, items)) {
        arr.push(items[i]);
      }
    }

    return arr;
  };
}

module.exports = applyCustomFilter;
