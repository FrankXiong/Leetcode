/**
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

// Solution A: Time Limit Exceeded

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let rArr = ransomNote.split(''),
        mArr = magazine.split(''),
        j = 0;
    for(let i = 0; i < rArr.length; i++) {
        let index = mArr.indexOf(rArr[i]);
        if (index !== -1) {
            mArr.splice(index, 1);
            j++;
        }
    }
    return j < rArr.length ? false : true;
};

// Solution A (edited)
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let rArr = ransomNote.split(''),
        mArr = magazine.split(''),
        j = 0;
    for(let i = 0; i < rArr.length; i++) {
        let index = mArr.indexOf(rArr[i]);
        if (index !== -1) {
            mArr[index] = 0;
            j++;
        }
    }
    return j < rArr.length ? false : true;
};
