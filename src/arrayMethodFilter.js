'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filteredArr = [];
    let elementsCount = 0;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filteredArr[elementsCount] = this[i];
        elementsCount++;
      }
    }

    return filteredArr;
  };
}

module.exports = applyCustomFilter;
