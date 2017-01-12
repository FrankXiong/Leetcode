/**
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let arr = s.split(''), o = {}, result = -1;
    for(let i = 0, len = arr.length; i < len; i++) {
        if(!o[arr[i]]) {
            o[arr[i]] = 1;
        } else {
            o[arr[i]]++;
        }
    }
    for(let j in o) {
        if(o[j] === 1) {
            result = arr.indexOf(j);
            break;
        }
    }
    return result;
};
