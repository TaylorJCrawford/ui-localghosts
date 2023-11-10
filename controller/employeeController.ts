import { Request, Response, Application } from 'express';
import { DeliveryEmployee } from '../model/deliveryEmployee'

const employeeService = require('../services/employeeService')

module.exports = function (app: Application) {
    app.get ('/employees/delivery', async (req: Request, res: Response) => {
        let data: DeliveryEmployee[] = [];

        try {
            data = await employeeService.getDeliveryEmployees();
        } catch (e) {
            console.error(e);
        }

        const { token } = req.session;
        res.render('list-delivery-employees', { deliveryEmployees: data, token })
    })


app.get('/employee/delivery/create', async (req:Request, res: Response) => {
    const { token } = req.session;
    res.render('add-delivery-employee', { token })
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


    app.get ('/employees/delivery/:id', async (req: Request, res: Response) => {
        let data: DeliveryEmployee[] = [];

        try {
            data = await employeeService.getDeliveryEmployeeById(req.params.id);

        } catch (e) {
            console.error(e);
        }

        const { token } = req.session;
        res.render('list-delivery-employee', { employee: data, token })
    })


    app.post('/employee/delivery/:id', async(req: Request, res: Response) => {
        try {
            await employeeService.deleteDeliveryEmployee(req.body.deleteDeliveryEmployee);
            res.redirect('list-delivery-employee');
        } catch (e) {
            console.error(e);
            res.render('list-delivery-employee');
        }

    })
}