'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const result = [];

    if (!callback) {
      return undefined;
    }

    if (this.length === 0) {
      return result;
    }

    for (let i = 0; i < this.length; i++) {
      if (callback && callback(this[i], [i], this)) {
        result.push(this[i]);
      }
    }

    return result;
  };
}

module.exports = applyCustomFilter;
