'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const filterItems = [];

    for (let i = 0; i < this.length; i++) {
      const item = this[i];
      const isTestPassed = callback(item, i, this);

      if (isTestPassed) {
        filterItems[filterItems.length] = item;
      }
    }

    return filterItems;
  };
}

module.exports = applyCustomFilter;
