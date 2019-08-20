'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const resultArr = [];
    this.forEach((item, index) => {
      if (callback(item, index, this)) {
        return resultArr.push(item);
      }
    });
    return resultArr;
  };
}

module.exports = applyCustomFilter;
