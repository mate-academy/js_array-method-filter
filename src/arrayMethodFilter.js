'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const results = [];

    for (let i = 0; i < this.length; i++) {
      const condition = callback(this[i], i, this);

      if (condition) {
        results.push(this[i]);
      }
    }

    return results;
  };
}

module.exports = applyCustomFilter;
