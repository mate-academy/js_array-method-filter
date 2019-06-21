'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const myarray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === true) {
        myarray[myarray.length] = this[i];
      }
    }

    return myarray;
  };
}

module.exports = applyCustomFilter;
