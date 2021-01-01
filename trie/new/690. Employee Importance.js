/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

const getImportance = (map, id) => {
  const emp = map.get(id);
  if (emp) {
    let ans = emp.importance;
    emp.subordinates.forEach(sub => {
      ans += getImportance(map, sub);
    });
    return ans;
  }
  return 0;
};
/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  const map = new Map();
  employees.forEach(emp => {
    map.set(emp.id, emp);
  });
  return getImportance(map, id)
};

// console.log(
//   GetImportance([
//     { id: 1, importance: 2, subordinates: [2] },
//     { id: 2, importance: 3, subordinates: [] },
//   ], 2),
// );
console.log(
  GetImportance(
    [
      { id: 1, importance: 5, subordinates: [2, 3] },
      { id: 2, importance: 3, subordinates: [] },
      { id: 3, importance: 3, subordinates: [] },
    ],
    1,
  ),
);
