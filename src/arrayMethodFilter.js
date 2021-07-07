'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const callbackResult = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        callbackResult.push(this[i]);
      }
    }

    return callbackResult;
  };
}

module.exports = applyCustomFilter;
