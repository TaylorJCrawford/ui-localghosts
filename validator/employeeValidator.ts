import { DeliveryEmployee } from "../model/deliveryEmployee"

module.exports.validateEmployee = function (deliveryEmployee: DeliveryEmployee): string {
    if (deliveryEmployee.firstName.length > 50) {
        return "First name greater than 50 characters.";
    }

    if (deliveryEmployee.lastName.length > 50) {
        return "Last name greater than 50 characters.";
    }

    if (deliveryEmployee.firstName.length > 50) {
        return "First name greater than 50 characters.";
    }

    if (deliveryEmployee.salary < 1000) {
        return "Salary less than £1000.00.";
    }

    if (deliveryEmployee.bankAccountNumber.length != 8) {
        return "Bank Account Number should be 8 characters.";
    }

    if (deliveryEmployee.niNumber.length != 9) {
        return "National Insurance Number should be 9 characters.";
    }

  return null
}