'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    // write code here
    const filterMethod = [];
    this.forEach((element, index, arr) => {
      if (callback(element, index, arr)) {
        filterMethod.push(element);
      }
    });
    return filterMethod;
  };
}

module.exports = applyCustomFilter;
