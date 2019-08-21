'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const result = [];
    let resultItemIndex = 0;
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result[resultItemIndex] = this[i];
        resultItemIndex++;
      }
    }
    return result;
  };
}

module.exports = applyCustomFilter;
