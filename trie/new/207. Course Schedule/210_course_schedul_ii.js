/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const graph = new Map();
  const indegrees = Array(numCourses).fill(0);
  const q = [];
  const order = [];
  for (let [course, dependency] of prerequisites) {
    graph.set(course, (graph.get(course) || new Set()).add(dependency));
    graph.set(dependency, (graph.get(dependency) || new Set()).add(course));
    indegrees[course]++;
  }

  for (let i = 0; i < indegrees.length; i++) {
    if (indegrees[i] == 0) q.push(i);
  }
  while (q.length) {
    const v = q.shift();

    if (graph.has(v)) {
      for (let e of graph.get(v) || []) {
        indegrees[e]--;
        if (indegrees[e] == 0) q.push(e);
      }
      order.push(v);
    }
  }
  if (numCourses === order.length) return order;
  else return [];
};

// console.log(findOrder(2, [[1, 0]]));
// console.log(
//   findOrder(4, [
//     [1, 0],
//     [2, 0],
//     [3, 1],
//     [3, 2],
//   ]),
// );
console.log(
  findOrder(3, [
    [1, 0],
    [1, 2],
    [0, 1],
  ]),
);
