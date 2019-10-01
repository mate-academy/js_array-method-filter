'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filteredArr = [];
    this.forEach((e, index, arr) => callback(e, index, arr) ? filteredArr.push(e) : e);

    return filteredArr;
  };
}

module.exports = applyCustomFilter;
