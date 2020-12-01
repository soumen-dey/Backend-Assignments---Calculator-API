const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

var getErrorResponse = (message = null) => {
    return JSON.stringify({
        status: 'error',
        message: message,
        result: null,
    });
}

var getResponse = (message = null, result) => {
    return {
        status: 'success',
        message: message,
        result: result,
    }
}

app.get('/', (req, res) => {
    res.send('Hello world!');
    res.end();
});

app.post('/add', (req, res) => {
    
    let body = req.body;

    if (typeof body.num1 === 'string' || typeof body.num2 === 'string') {
        res.send(getErrorResponse('Invalid data types'));
        res.end();
        return;
    }

    if (body.num1 > 1000000 || body.num2 > 1000000) {
        res.send(getErrorResponse('Overflow'));
        res.end();
        return;
    }

    if (body.num1 < -1000000 || body.num2 < -1000000) {
        res.send(getErrorResponse('Underflow'));
        res.end();
        return;
    }

    let sum = body.num1 + body.num2;

    if (sum > 1000000) {
        res.send(getErrorResponse('Overflow'));
        res.end();
        return;
    }

    if (sum < -1000000) {
        res.send(getErrorResponse('Underflow'));
        res.end();
        return;
    }

    res.send(getResponse('the sum of given two numbers', sum));
    res.end();
    return;

});

app.post('/sub', (req, res) => {
    
    let body = req.body;

    if (typeof body.num1 === 'string' || typeof body.num2 === 'string') {
        res.send(getErrorResponse('Invalid data types'));
        res.end();
        return;
    }

    if (body.num1 > 1000000 || body.num2 > 1000000) {
        res.send(getErrorResponse('Overflow'));
        res.end();
        return;
    }

    if (body.num1 < -1000000 || body.num2 < -1000000) {
        res.send(getErrorResponse('Underflow'));
        res.end();
        return;
    }

    let sub = body.num1 - body.num2;

    if (sub < -1000000) {
        res.send(getErrorResponse('Underflow'));
        res.end();
        return;
    }

    res.send(getResponse('the difference of given two numbers', sub));
    res.end();
    return;

});

app.post('/multiply', (req, res) => {
    
    let body = req.body;

    if (typeof body.num1 === 'string' || typeof body.num2 === 'string') {
        res.send(getErrorResponse('Invalid data types'));
        res.end();
        return;
    }

    if (body.num1 > 1000000 || body.num2 > 1000000) {
        res.send(getErrorResponse('Overflow'));
        res.end();
        return;
    }

    if (body.num1 < -1000000 || body.num2 < -1000000) {
        res.send(getErrorResponse('Underflow'));
        res.end();
        return;
    }

    let multiply = body.num1 * body.num2;

    if (multiply < -1000000) {
        res.send(getErrorResponse('Underflow'));
        res.end();
        return;
    }

    res.send(getResponse('The product of given numbers', multiply));
    res.end();
    return;

});

app.post('/divide', (req, res) => {
    
    let body = req.body;

    if (typeof body.num1 === 'string' || typeof body.num2 === 'string') {
        res.send(getErrorResponse('Invalid data types'));
        res.end();
        return;
    }

    if (body.num2 === 0) {
        res.send(getErrorResponse('Cannot divide by zero'));
        res.end();
        return;
    }

    if (body.num1 > 1000000 || body.num2 > 1000000) {
        res.send(getErrorResponse('Overflow'));
        res.end();
        return;
    }

    if (body.num1 < -1000000 || body.num2 < -1000000) {
        res.send(getErrorResponse('Underflow'));
        res.end();
        return;
    }

    let divide = body.num1 / body.num2;

    if (divide < -1000000) {
        res.send(getErrorResponse('Underflow'));
        res.end();
        return;
    }

    res.send(getResponse('The division of given numbers', divide));
    res.end();
    return;

});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;