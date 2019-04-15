'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    let result = [];
    this.map((el, i) => {
      return callback(el, i, this)
        ? result.push(el) : result;
    });
    return result;
  };
}

module.exports = applyCustomFilter;
