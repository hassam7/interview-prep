/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = new Map();
  const indegrees = Array(numCourses).fill(0);
  const queue = [];
  const order = [];
  for (let [course, dependency] of prerequisites) {
    graph.set(course, (graph.get(course) || new Set()).add(dependency));
    graph.set(dependency, (graph.get(dependency) || new Set()).add(course));
    indegrees[course]++;
  }
  for (let i = 0; i < indegrees.length; i++) {
    if (indegrees[i] == 0) queue.push(i);
  }
  while (queue.length) {
    const v = queue.shift();
    for (const e of graph.get(v) || []) {
      indegrees[e]--;
      if (indegrees[e] == 0) queue.push(e);
    }
    order.push(v);
  }
  console.log(order);
  return numCourses === order.length;
};

// console.log(canFinish(2, [[1, 0]]));
// console.log(
//   canFinish(2, [
//     [1, 0],
//     [0, 1],
//   ]),
// );
// console.log(
//   canFinish(4, [
//     [1, 0],
//     [2, 0],
//     [3, 1],
//     [3, 2],
//   ]),
// );
console.log(
  canFinish(3, [
    [1, 0],
    [1, 2],
    [0, 1],
  ]),
);
