import { Response, Request, Application } from "express";

const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const session = require('express-session')

const app: Application = express();

// Configure Nunjucks
const appViews = path.join(__dirname, '/views/');

const nunjucksConfig = {
    autoescape: true,
    noCache: true,
    express: app
};

nunjucks.configure(appViews, nunjucksConfig);

// Configure Express
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Express-Session
app.use(session({ secret: "NOT HARDCODED SECRET", cookie: {maxAge: 3600000} }));

declare module "express-session" {
    interface SessionData {
        // Place Holder For Session objects
    }
}


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

    // Express Routes
app.get('/', (req: Request, res: Response) => {
    res.render('home', {pageTitle: "Employee Managment System"});
});