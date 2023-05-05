const includeSalary = true;

// Worst way
const employee1 = { id: 1, name: "Vin" };
if (includeSalary) {
  employee1.salary = 9000;
}
console.log(employee1);

// Best way
const employee2 = {
  id: 1,
  name: "Vin",
  ...(includeSalary && { salary: 13000 }),
};
console.log(employee2);
