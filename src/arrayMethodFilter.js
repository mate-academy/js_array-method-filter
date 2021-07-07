'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.push2 = function(...elements) {
    for (let i = 0; i < elements.length; i++) {
      this[this.length] = elements[i];
    }

    return this.length;
  };

  [].__proto__.filter2 = function(callback) {
    const filtered = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filtered.push2(this[i]);
      }
    }

    return filtered;
  };
}

module.exports = applyCustomFilter;
