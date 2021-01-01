import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
// var kClosest = (points, K) => {
//   const pQueue = new MinPriorityQueue({priority: obj => obj.distance});
//   for(let point of points) {
//     const [x, y] = point;

//     const distance = (x*x) + (y*y);
//     pQueue.enqueue(point, distance);
//   }
//   return pQueue.toArray().slice(0, K).map(e => e.element);
// }

// var kClosest = (points, K) => {
//   return points
//     .sort(([x1, y1], [x2, y2]) => ((x1 * x1) + (y1 * y1)) - ((x2 * x2) + (y2 * y2)))
//     .slice(0, K);
// }

console.log(kClosest([[1, 3], [-2, 2]], 1));
// console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 1));