'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filteredItems = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === true) {
        filteredItems[filteredItems.length] = this[i];
      }
    }

    return filteredItems;
  };
}

module.exports = applyCustomFilter;
