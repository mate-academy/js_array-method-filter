'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    if (typeof callback !== 'function') {
      return;
    }

    const newArrFromThis = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArrFromThis[newArrFromThis.length] = this[i];
      }
    }

    return newArrFromThis;
  };
}

module.exports = applyCustomFilter;
