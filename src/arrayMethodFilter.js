'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const rest = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        rest.push(this[i]);
      }
    }

    return rest;
  };
}

module.exports = applyCustomFilter;
