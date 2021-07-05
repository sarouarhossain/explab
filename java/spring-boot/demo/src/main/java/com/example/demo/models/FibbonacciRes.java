package com.example.demo.models;

import lombok.Builder;
import lombok.Data;

import java.math.BigInteger;

@Data
@Builder
public class FibbonacciRes {
    Integer number;
    BigInteger fibonacci;
    long time;
    String threadName;
}
