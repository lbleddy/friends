package com.lbleds.Friends.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/users")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<User> getUsers(){
      return (List<User>) userRepo.findAll();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable Long id){
      Optional<User> optionalEntity = userRepo.findById(id);
      return optionalEntity.orElse(null);
    }

  @Bean
  public ViewResolver getViewResolver() {
    InternalResourceViewResolver resolver = new InternalResourceViewResolver();
    resolver.setPrefix("templates/");
    //resolver.setSuffix(".html");
    return resolver;
  }

}
