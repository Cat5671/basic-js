const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let result = []

    str = str !== null ? str : `${str}`
    addition = options.addition !== null ? options.addition : `${options.addition}`

    separator = options.separator || '+'
    additionSeparator = options.additionSeparator || '|'

    repeatTimes = options.repeatTimes || 1
    additionRepeatTimes = options.additionRepeatTimes || 1

    for (let index = 0; index < repeatTimes; index++) {
        result.push(str)

        for (let index = 0; index < additionRepeatTimes; index++) {
            result.push(addition)
            if (index != additionRepeatTimes - 1) result.push(additionSeparator)

        }
        if (index != repeatTimes - 1) result.push(separator)
    }

    return result.join('')
}

module.exports = {
  repeater
};
