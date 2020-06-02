'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(filter) {
    const filteredArray = [];

    for (let i = 0; i < this.length; i++) {
      if (filter(this[i], i, this)) {
        filteredArray.push(this[i]);
      }
    }

    return filteredArray;
  };
}

module.exports = applyCustomFilter;
