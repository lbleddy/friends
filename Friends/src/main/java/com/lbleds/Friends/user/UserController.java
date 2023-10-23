package com.lbleds.Friends.user;


import org.apache.tomcat.util.json.JSONParser;
import org.apache.tomcat.util.json.ParseException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import java.rmi.ServerException;
import java.util.ArrayList;
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
    @CrossOrigin(origins = "http://localhost:4200")
    public User getUserById(@PathVariable Long id){
      Optional<User> optionalEntity = userRepo.findById(id);
      return optionalEntity.orElse(null);
    }

    @RequestMapping(value="http://localhost:8080/users/add",
    method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:4200/users/add")
    public ResponseEntity<User> addUser(@RequestBody String user) throws ServerException, ParseException {
      List<String> hobbies = new ArrayList<>();
      hobbies.add("coding");
      JSONParser parser = new JSONParser(user);
      JSONObject object = (JSONObject)parser.parse();

      User user2 = new User(object.get("name").toString(),Integer.parseInt(object.get("age").toString()),List.of(object.get("hobbies").toString()));
        System.out.println("here");
        userRepo.save(user2);
        userRepo.findAll().forEach(System.out::println);
        if(user2 == null) {
        System.out.println("here in server exception");
          throw new ServerException("Error");
        }
        return new ResponseEntity<User>(user2,HttpStatus.CREATED);
    }
  @DeleteMapping(path = "/users/{id}")
  @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Long> deleteUser(@PathVariable Long id){
      System.out.println("here");
      userRepo.deleteById(id);
      return new ResponseEntity<>(id,HttpStatus.ACCEPTED);
    }

  @Bean
  public ViewResolver getViewResolver() {
    InternalResourceViewResolver resolver = new InternalResourceViewResolver();
    resolver.setPrefix("templates/");
    //resolver.setSuffix(".html");
    return resolver;
  }

}
