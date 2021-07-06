'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const newFilteredArrey = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newFilteredArrey[newFilteredArrey.length] = this[i];
      }
    }
    return newFilteredArrey;
  };
}

module.exports = applyCustomFilter;
