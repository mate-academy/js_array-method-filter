'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const item = this[i];
      const index = i;
      const arr = this;

      if (callback(item, index, arr)) {
        result[result.length] = item;
      }
    }

    return result;
  };
}

module.exports = applyCustomFilter;
