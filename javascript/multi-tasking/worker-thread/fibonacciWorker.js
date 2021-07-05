const { workerData, parentPort } = require('worker_threads')

const fibonacci = (n) => {
    if (n <= 1) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}

const getfibonacci = (number) => {
    const startTime = new Date()
    const fib = fibonacci(number)
    const endTime = new Date()
    return {
        number: number,
        fibonacci: fib,
        time: endTime.getTime() - startTime.getTime() + 'ms',
    }
}

parentPort.postMessage(getfibonacci(workerData.number))