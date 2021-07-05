package com.example.demo.Services;

import com.example.demo.models.FibbonacciRes;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.time.Duration;
import java.time.Instant;

@Service
public class FibonacciService {

    public FibbonacciRes getFibonacci(Integer number){
        Instant start = Instant.now();
        var fibonacci = fibonacci(number);
        Instant end = Instant.now();

    return FibbonacciRes.builder()
        .number(number)
        .fibonacci(fibonacci)
        .time(Duration.between(start, end).toMillis())
        //.threadName(Thread.currentThread().getName())
        .build();
    }

    BigInteger fibonacci(Integer number){
        if(number<=1) return BigInteger.ONE;
        return fibonacci(number-1).add(fibonacci(number-2));
    }
}
