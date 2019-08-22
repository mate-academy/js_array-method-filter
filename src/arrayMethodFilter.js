'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      let resThis = callback(this[i], i, this)
      if (resThis) {
        result.push(this[i]);
      };
    };

    return result;
  };
}

module.exports = applyCustomFilter;
