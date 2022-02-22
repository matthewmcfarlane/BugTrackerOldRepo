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

        User matthew = new User("789ghi","Matthew Mcfarlane", "mmcfarlane", "mm@example.com", "moderator");
        userRepository.save(matthew);

        User scott = new User("101jkl","Scott Reoch", "sreoch", "sr@example.com", "basic permission");
        userRepository.save(scott);

        Bug bug1 = new Bug("bug description", "severe");
        bug1.addAssignee(adam);
        bug1.addAssignee(guilherme);
        bugRepository.save(bug1);

        Bug bug2 = new Bug("bug description2", "low");
        bug2.addAssignee(matthew);
        bugRepository.save(bug2);

        Bug bug3 = new Bug("bug description3", "low");
        bug3.addAssignee(scott);
        bugRepository.save(bug3);


    }
}
