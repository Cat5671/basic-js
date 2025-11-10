const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(value) {
        let maxdepth = 1
        value.forEach(element => {
            if (Array.isArray(element)) {
                let depth = 1
                depth += this.calculateDepth(element)
                maxdepth = depth > maxdepth ? depth : maxdepth
            }
        });
        return maxdepth
    }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
