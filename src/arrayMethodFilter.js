'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filteredArray = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filteredArray[filteredArray.length] = this[i];
        // filteredArray.push(this[i]);
      }
    }

    return filteredArray;
  };
}

module.exports = applyCustomFilter;
