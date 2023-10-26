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


app.get('/employee/delivery/create', async (req:Request, res: Response) => {
    res.render('add-delivery-employee')
})

app.post('/employee/delivery/create', async (req:Request, res:Response) => {
    let data: DeliveryEmployee = req.body
    let id: Number

    try {
        console.log(data)
        id = await employeeService.createEmployee(data)
        res.redirect('/employees/delivery')
    } catch(e) {
        console.error(e);
        res.locals.errormessage = e.message
        res.render('add-delivery-employee', req.body)
    }
})

}