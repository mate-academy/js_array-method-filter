'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const newArr = [];
    newArr.length = this.length;
    let newIndex = 0;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArr[newIndex] = this[i];
        newIndex++;
      }
    }
    newArr.length = newIndex;

    return newArr;
  };
}

module.exports = applyCustomFilter;
