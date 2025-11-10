const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw Error
    let accumulator = []
    for (let index = 0; index < arr.length; index++) {
        const currentValue = arr[index];
        switch (currentValue) {
            case discardNext:
                if (index < arr.length - 1) index++;
                break;
            case discardPrev:
                if (index > 0) accumulator.pop()
                break;
            case doubleNext:
                if (index < arr.length - 1) accumulator.push(arr[index + 1])
                break;
            case doublePrev:
                if (index != 0) accumulator.push(arr[index - 1])
                break
            default:
                accumulator.push(currentValue)
                break;
        }
    }
    return accumulator;
}

module.exports = {
  transform
};
