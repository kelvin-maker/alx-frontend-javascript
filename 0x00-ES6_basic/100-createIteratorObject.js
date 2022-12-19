export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const departments = Object.keys(allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  const iterator = {
    next() {
      let value;
      let done = true;
      if (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];
        if (currentEmployeeIndex < allEmployees[currentDepartment].length) {
          value = allEmployees[currentDepartment][currentEmployeeIndex];
          done = false;
          currentEmployeeIndex++;
        } else {
          currentDepartmentIndex++;
          currentEmployeeIndex = 0;
        }
      }
      return { value, done };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
  return iterator;
}
