package com.lbleds.Friends;

import com.lbleds.Friends.user.User;
import com.lbleds.Friends.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class FriendsApplication {

  @Autowired
  UserRepository userRepo;

	public static void main(String[] args) {
		SpringApplication.run(FriendsApplication.class, args);
	}

	@Bean
	CommandLineRunner init(){
		return args -> {

      List<String> hobbies = new ArrayList<>();
      hobbies.add("Tennis");
      hobbies.add("Piano");
      hobbies.add("Ping Pong");
      hobbies.add("Basketball");
      hobbies.add("Coding");

      User first = new User("Lucas",26,hobbies);
      userRepo.save(first);

      for(User entry:userRepo.findAll()){
        System.out.println(entry);
      }
		};
	}

}
