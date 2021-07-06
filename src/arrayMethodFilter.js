'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const newArr = [];
    this.forEach((element, i, arr) => {
      if (callback(element, i, arr)) {
        newArr.push(element);
      }
    });
    return newArr;
  };
}

module.exports = applyCustomFilter;
