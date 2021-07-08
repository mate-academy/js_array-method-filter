'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filteredArray = [];
    this.forEach((item, index, array) => {
      if (callback(item, index, array)) {
        filteredArray.push(item);
      }
    });
    return filteredArray;
  };
}
module.exports = applyCustomFilter;
