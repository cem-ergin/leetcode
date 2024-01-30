/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const openBracketIndexes = [0, 2, 4];
  const pharantesis = ["(", ")", "{", "}", "[", "]"];

  const currentOpenIndexes: number[] = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const charIndex = pharantesis.findIndex((e) => e === char);
    if (openBracketIndexes.some((index) => index === charIndex)) {
      currentOpenIndexes.push(charIndex);
    } else {
      if (currentOpenIndexes.length === 0) {
        return false;
      } else {
        if (
          charIndex - 1 ===
          currentOpenIndexes[currentOpenIndexes.length - 1]
        ) {
          currentOpenIndexes.pop();
        } else {
          return false;
        }
      }
    }
  }
  if (currentOpenIndexes.length !== 0) {
    return false;
  }

  return true;
}
// @lc code=end
