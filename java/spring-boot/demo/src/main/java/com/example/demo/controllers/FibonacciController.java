package com.example.demo.controllers;

import com.example.demo.Services.FibonacciService;
import com.example.demo.models.FibbonacciRes;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigInteger;

@RestController
@RequestMapping("/getfibonacci")
public class FibonacciController {
    Logger logger = LoggerFactory.getLogger(FibonacciController.class);
    @Autowired
    FibonacciService fibonacciService;
    @GetMapping("")
    public ResponseEntity<FibbonacciRes> get(@RequestParam Integer number){
        logger.info("Thread: "+ Thread.currentThread().getName());
        var res = fibonacciService.getFibonacci(number);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
