'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const condition = callback(this[i], i, this);

      if (condition) {
        result.push(this[i]);
      }
    }

    return result;
  };
}

module.exports = applyCustomFilter;
