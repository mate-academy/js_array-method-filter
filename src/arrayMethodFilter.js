'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    let o = 0;
    const filtered = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filtered[o] = this[i];
        o++;
      }
    }

    return filtered;
  };
}

module.exports = applyCustomFilter;
