'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filteredArr = [];
    this.forEach((item, i) => {
      if (callback(item, i, this)) {
        return filteredArr.push(item);
      }
    });
  };
}

module.exports = applyCustomFilter;
