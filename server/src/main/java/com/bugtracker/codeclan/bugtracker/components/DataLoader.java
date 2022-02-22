package com.bugtracker.codeclan.bugtracker.components;

import com.bugtracker.codeclan.bugtracker.models.Bug;
import com.bugtracker.codeclan.bugtracker.models.User;
import com.bugtracker.codeclan.bugtracker.repositories.BugRepository;
import com.bugtracker.codeclan.bugtracker.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    BugRepository bugRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args){
        User adam = new User("123abc", "Adam Kidd", "akidd", "adam@example.com", "basic permission");
        userRepository.save(adam);

        User guilherme = new User("456def", "Guilherme Nunes", "gnunes", "gn@example.com", "moderator");
        userRepository.save(guilherme);

        Bug bug1 = new Bug("bug description", "severe");
        bug1.addAssignee(adam);
        bug1.addAssignee(guilherme);
        bugRepository.save(bug1);
    }
}
