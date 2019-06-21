'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    // write code here
    let counter = 0;
    const filteredArray = [];

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && callback(this[i], i, this)) {
        filteredArray[counter] = this[i];
        counter++;
      }
    }

    return filteredArray;
  };
}

module.exports = applyCustomFilter;
