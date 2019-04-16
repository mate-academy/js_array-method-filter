'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    let result = [];
    this.forEach((el, i) => {
      if (callback(el, i, this)) {
        return result.push(el);
      }
    });
    return result;
  };
}

module.exports = applyCustomFilter;
