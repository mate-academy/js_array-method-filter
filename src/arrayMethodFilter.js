'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.push2 = function(...elements) {
    const items = [...elements];

    for (let i = 0; i < items.length; i++) {
      this[this.length] = items[i];
    }

    return this.length;
  };

  [].__proto__.filter2 = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push2(this[i]);
      };
    }

    return result;
  };
}

module.exports = applyCustomFilter;
