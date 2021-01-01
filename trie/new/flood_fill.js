/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var helper = function (image, sr, sc, newColor, startColor) {
  if (
    sc < 0 ||
    sr < 0 ||
    sr >= image.length ||
    sc >= image[0].length ||
    image[sr][sc] != startColor
  )
    return;
  image[sr][sc] = newColor;
  helper(image, sr + 1, sc, newColor, startColor);
  helper(image, sr - 1, sc, newColor, startColor);
  helper(image, sr, sc + 1, newColor, startColor);
  helper(image, sr, sc - 1, newColor, startColor);
};
const image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
let sr = 1,
  sc = 1,
  newColor = 2;
let startColor = image[sr][sc];
console.log(image);
if (newColor != startColor)
  helper(image, sr, sc, 2, (startColor = image[sr][sc]));
console.log(image);
