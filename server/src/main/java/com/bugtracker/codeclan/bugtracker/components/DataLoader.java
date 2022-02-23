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
        User adam = new User("123abc", "Adam Kidd", "aKidd", "adam@example.com", "read only");
        userRepository.save(adam);

        User guilherme = new User("456def", "Guilherme Nunes", "gNunes", "gn@example.com", "contribute");
        userRepository.save(guilherme);

        User matthew = new User("789ghi","Matthew Mcfarlane", "mMcfarlane", "mm@example.com", "designer");
        userRepository.save(matthew);

        User scott = new User("101jkl","Scott Reoch", "sReoch", "sr@example.com", "full control");
        userRepository.save(scott);

        User clark = new User("111mno","Clark Kent", "cKent", "ck@example.com", "contribute");
        userRepository.save(clark);

        User bruce = new User("121pqr", "Bruce Wayne", "bWayne", "bw@example.com", "contribute");
        userRepository.save(bruce);

        User barry = new User("131stu","Barry Allen", "bAllen", "ba@example.com", "designer");
        userRepository.save(barry);

        User oliver = new User("141vxz","Oliver Queen", "oQueen", "oq@example.com", "full control");
        userRepository.save(oliver);




        Bug bug1 = new Bug("bug description1", "high");
        bug1.addAssignee(adam);
        bug1.addAssignee(guilherme);
        bugRepository.save(bug1);

        Bug bug2 = new Bug("bug description2", "low");
        bug2.addAssignee(matthew);
        bugRepository.save(bug2);

        Bug bug3 = new Bug("bug description3", "medium");
        bug3.addAssignee(clark);
        bugRepository.save(bug3);

        Bug bug4 = new Bug("bug description4", "high");
        bug4.addAssignee(bruce);
        bugRepository.save(bug4);

        Bug bug5 = new Bug("bug description5", "low");
        bug5.addAssignee(barry);
        bugRepository.save(bug5);

        Bug bug6 = new Bug("bug description6", "high");
        bug6.addAssignee(oliver);
        bugRepository.save(bug6);

        Bug bug7 = new Bug("bug description7", "low");
        bug7.addAssignee(guilherme);
        bugRepository.save(bug7);

        Bug bug8 = new Bug("bug description8", "medium");
        bug8.addAssignee(matthew);
        bugRepository.save(bug8);


    }
}
