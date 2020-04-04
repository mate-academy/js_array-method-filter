'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function (callback) {
    const resultArr = [];
    
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        resultArr.push(this[i]);
      }
    }
    return resultArr;
  };
}

module.exports = applyCustomFilter;
