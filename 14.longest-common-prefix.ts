/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  var common = "";
  for (var k = 0; k < strs[0].length; k++) {
    const char = strs[0][k];
    var isSame = true;
    for (var i = 0; i < strs.length; i++) {
      if (char !== strs[i][k]) {
        isSame = false;
        k = strs[0].length;
        break;
      }
    }
    if (isSame) {
      common += char;
    }
  }

  return common;
}

// @lc code=end
