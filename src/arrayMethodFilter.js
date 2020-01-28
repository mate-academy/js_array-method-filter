'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.customPush = function(...elements) {
    for (let i = 0; i < elements.length; i++) {
      this[this.length] = elements[i];
    }

    return this.length;
  };

  [].__proto__.filter2 = function(callback) {
    const newArr = [];

    for (let i = 0; i <= this.length - 1; i++) {
      if (callback(this[i], i, this)) {
        newArr.customPush(this[i]);
      }
    }

    return newArr;
  };
}

module.exports = applyCustomFilter;
