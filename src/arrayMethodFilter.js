'use strict';

/**
 * Implement method Filter
 */

function applyCustomFilter() {
  [].__proto__.filter2 = function(foo) {
    const resultArr = [];
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      const index = i;

      if (foo(item, index, arr)) {
        resultArr[resultArr.length] = item;
      };
    }
    return resultArr;
  };
}

module.exports = applyCustomFilter;
