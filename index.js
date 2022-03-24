const employee = {
    name: "Sarah",
    streetAddress: {
        street1: "123 Main st",
        street2: "apt 321",
        city: "Miami",
        state: "FL",
        zipcode: 31119,
    }
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employees = {...employee}
    employees[key] = value
    return employees
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
}
function     destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
}