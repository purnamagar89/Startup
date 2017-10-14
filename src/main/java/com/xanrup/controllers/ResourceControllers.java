package com.xanrup.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ResourceControllers {

    @RequestMapping(value="/",method = RequestMethod.GET)
    public String homepage(){
        return "home";
    }
}
