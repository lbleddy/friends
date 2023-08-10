package com.lbleds.Friends.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserRepository userRepo;
    public UserController(){

    }

    public UserController(UserRepository userRepo){
        this.userRepo = userRepo;
    }

    @GetMapping("/")
    public void getUsersDefault(){
        System.out.println("Welcome");
    }


}
