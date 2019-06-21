'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const resultAttay = [];
    for (let i = 0; i < this.length; i++) {
      const item = this[i];
      const index = i;
      const arr = this;

      if (callback(item, index, arr)) {
        resultAttay.push(this[i]);
      }
    }
    return resultAttay;
  };
}

module.exports = applyCustomFilter;
