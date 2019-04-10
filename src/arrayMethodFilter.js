'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback) {
    const items = this;
    const resultItems = [];

    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let shouldBeAdded = callback(item, i, items);

      if (shouldBeAdded) {
        resultItems.push(item);
      }
    }
    return resultItems;
  };
}

module.exports = applyCustomFilter;
