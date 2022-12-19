export default function iterateThroughObject(reportWithIterator) {
  let employeeString = '';
  for (const employee of reportWithIterator) {
    employeeString += `${employee} | `;
  }
  return employeeString.slice(0, -3);
}
