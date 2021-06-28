const express = require('express')
const app = express()

const appid = process.env.APPID;

const port = 3000
app.listen(port, () => console.log(`listening on port ${port}`))

app.get('/getfibonacci', (req, res) => {
    const startTime = new Date()
    const result = fibonacci(parseInt(req.query.number))
    const endTime = new Date()

    res.json({
        number: parseInt(req.query.number),
        isPrime: result,
        time: endTime.getTime() - startTime.getTime() + 'ms',
        appid: appid
    })
})

app.get("/isprime", (req,res) => {
    const startTime = new Date()
    const result = isPrime(parseInt(req.query.number))
    const endTime = new Date()

    res.json({
        number: parseInt(req.query.number),
        isPrime: result,
        time: endTime.getTime() - startTime.getTime() + 'ms',
        appid: appid
    })
})

const fibonacci = n => {
    if(n <= 1) return 1
    return fibonacci(n-1) + fibonacci(n-2)
}

/**
 * Prime check function (Bad function , CPU intensive)
 * @param {BigInteger} n 
 * @returns {Boolean}
 */
const isPrime = n => {
    if(n === 1) return false
    if(n === 2) return true
    let primeFlag = true;
    for(let i=2; i<n; i++){
        if(n%i === 0)
        {
            primeFlag = false;
            break;
        }
    }

    return primeFlag;
}