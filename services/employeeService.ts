import { DeliveryEmployee } from "../model/deliveryEmployee"
const employeeValidator = require('../validator/employeeValidator');

const axios = require('axios');

// Function to get all delivery employees in DB
module.exports.getDeliveryEmployees = async function (): Promise<DeliveryEmployee[]> {
    try {
        const response = await axios.get('http://localhost:8080/api/employee/delivery')

        return response.data
    } catch (e) {
        throw new Error('Could not get delivery employees')
    }
}

module.exports.createEmployee = async function (deliveryEmployee: DeliveryEmployee): Promise<number> {
    const error: string = employeeValidator.validateEmployee(deliveryEmployee)
    if (error) {
        throw new Error(error)
    }
    try {
        const response = await axios.post('http://localhost:8080/api/employee/delivery', deliveryEmployee)
        return response.data
    } catch (e) {
        throw new Error('Could not create product')
    }
}

// Function to get specific delivery employee using their ID
module.exports.getDeliveryEmployeeById = async function (id: number): Promise<DeliveryEmployee> {
    try {
        const response = await axios.get(`http://localhost:8080/api/employee/delivery/${id}`)
        return response.data
    } catch (e) {
        throw new Error('Could not get delivery employee with ID ' +id)
    }
}