const express = require('express')
const app = express()
    //const { Worker } = require('worker_threads')
const Pool = require('worker-threads-pool')
const e = require('express')

const pool = new Pool({ max: 4 })

const port = 3000
app.listen(port, () => console.log(`listening on port ${port}`))

app.get('/getfibonacci', (req, res) => {
    const workerData = {
        number: req.query.number,
    }

    pool.acquire('./fibonacciWorker.js', { workerData }, (error, worker) => {
        if (error) {
            console.log('Error happened: ', error)
        }

        worker.once('message', (result) => {
            console.log('Test: ', result)
            res.json(result)
        })

        worker.once('error', (error) => {
            console.log('Test: ', error)
        })

        worker.once('exit', (exitCode) => {
            console.log('Test: ', exitCode)
        })
    })
})

// app.get('/getfibonacci', (req, res) => {
//   const workerData = {
//     number: req.query.number,
//   }

//   const worker = new Worker('./fibonacciWorker.js', { workerData })
//   worker.once('message', (result) => {
//     console.log('Test: ', result)
//     res.json(result)
//   })

//   worker.once('error', (error) => {
//     console.log('Test: ', error)
//   })
//   worker.once('exit', (exitCode) => {
//     console.log('Test: ', exitCode)
//   })
// })