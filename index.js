const employee = {
    name: "Sam",
    streetAddress: "653 Windchase LN"
}

function updateEmployeeWithKeyAndValue(employee, streetAddress) {
    return {
        ...employee,
        [streetAddress]: "11 Broadway",
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress) {
    employee[streetAddress] = "12 Broadway"
    return employee
}

function deleteFromEmployeeByKey() {
    return {
        newEmployee: { ...employee },

    }
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name]
    return employee
}