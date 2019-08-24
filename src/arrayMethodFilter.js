'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  const filtered = [];
  [].__proto__.filter2 = function(callback) {
    // write code here
    for (let i = 0; i < this.length; i++) {
      filtered[i] = callback(this[i], i, this);
    }

    return filtered;
  };
}

module.exports = applyCustomFilter;
