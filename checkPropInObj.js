const employee = {
  id: 1,
  name: "Vin",
  salary: 5000,
};

const isSalaryExist = "salary" in employee;
console.log(isSalaryExist);

const isGenderExist = "gender" in employee;
console.log(isGenderExist);

/* the 'in' operator returns the boolean value true/false */
