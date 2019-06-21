'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const arrayMethodFilter = [];
    for (let elem = 0; elem < this.length; elem++) {
      if (callback(this[elem], elem, this)) {
        arrayMethodFilter[arrayMethodFilter.length] = this[elem];
      }
    }
    return arrayMethodFilter;
  };
}

module.exports = applyCustomFilter;
