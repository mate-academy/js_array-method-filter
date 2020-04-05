'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filtered = [];
    let filteredIndex = 0;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filtered[filteredIndex] = this[i];
        filteredIndex++;
      }
    }

    return filtered;
  };
}

module.exports = applyCustomFilter;
