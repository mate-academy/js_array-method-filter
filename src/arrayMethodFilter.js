'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filtred = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filtred.push(this[i]);
      }
    }

    return filtred;
  };
};

module.exports = applyCustomFilter;
