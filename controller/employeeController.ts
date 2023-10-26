import { Request, Response, Application } from 'express';
import { DeliveryEmployee } from '../model/deliveryEmployee'

const employeeService = require('../services/employeeService')

module.exports = function (app: Application) {
    app.get ('/employees/delivery', async (req: Request, res: Response) => {
        let data: DeliveryEmployee[] = [];

        try {
            data = await employeeService.getDeliveryEmployees()
        } catch (e) {
            console.error(e);
        }

        res.render('list-delivery-employees', { deliveryEmployees: data })
    })
}