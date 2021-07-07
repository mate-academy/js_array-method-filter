'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const arrFilter2 = [];
    this.forEach(
      (item, index, arr) => {
        if (callback(this[index], item, this)) {
          arrFilter2.push(this[index]);
        }
      }
    );

    return arrFilter2;
  };
}

module.exports = applyCustomFilter;
