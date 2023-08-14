package com.lbleds.Friends.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import java.rmi.ServerException;
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
    @CrossOrigin(origins = "http//localhost:4200")
    public User getUserById(@PathVariable Long id){
      Optional<User> optionalEntity = userRepo.findById(id);
      return optionalEntity.orElse(null);
    }
    @PostMapping(path = "/users",
              consumes = MediaType.APPLICATION_JSON_VALUE,
              produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> addUser(@RequestBody User user) throws ServerException {
        User user2 = userRepo.save(user);
        if(user2 == null)
          throw new ServerException("Error");
        else {
          return new ResponseEntity<>(user, HttpStatus.CREATED);
        }
    }

  @Bean
  public ViewResolver getViewResolver() {
    InternalResourceViewResolver resolver = new InternalResourceViewResolver();
    resolver.setPrefix("templates/");
    //resolver.setSuffix(".html");
    return resolver;
  }

}
