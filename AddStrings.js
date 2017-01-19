/**
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let carry = 0, result = [], len = Math.max(num1.length, num2.length), i = len;
    while(i--){
        let sum = (+num1[i - len + num1.length] || 0) + (+num2[i - len + num2.length] || 0) + carry;
        carry = parseInt(sum / 10);
        result.unshift(sum % 10);
    }
    if (carry) {
        result.unshift(carry);
    }
    return result.join('');
};
