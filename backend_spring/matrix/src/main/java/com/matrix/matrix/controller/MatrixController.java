package com.matrix.matrix.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class MatrixController {
    @GetMapping("/hello")
    public String Hello() {
        return "Hello World!";
    }
    

}
