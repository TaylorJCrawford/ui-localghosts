import { DeliveryEmployee } from "../model/deliveryEmployee"
const axios = require('axios');

// Function to get all delivery employees in DB
module.exports.getDeliveryEmployees =async function (): Promise<DeliveryEmployee[]> {
    try {
        const response = await axios.get('http://localhost:8080/api/employee/delivery')

        return response.data
    } catch (e) {
        throw new Error('Could not get delivery employees')
    }
}

// Function to get specific deliery employee using their ID
module.exports.getDeliveryEmployeeById = async function (id: number): Promise<DeliveryEmployee> {
    try {
        const response = await axios.get(`http://localhost:8080/api/employee/delivery/${id}`)
        return response.data
    } catch (e) {
        throw new Error('Could not get delivery employee with ID ' +id)
    }
}