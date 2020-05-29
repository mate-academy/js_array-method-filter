'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const output = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        output.push(this[i]);
      }
    }

    return output;
  };
}

module.exports = applyCustomFilter;
