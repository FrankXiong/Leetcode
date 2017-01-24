/**
Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?

*/

// Solution A: Iteration
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n > 1) {
        while(n % 3 === 0){
            n /= 3;
        }
    }
    return n === 1;
};

// Solution B: Recursion
var isPowerOfThree = function(n) {
    return n > 0 && (n === 1 || (n % 3 === 0 && isPowerOfThree(n/3)) )
};

// TODO: other solutions does not use iteration or loop
