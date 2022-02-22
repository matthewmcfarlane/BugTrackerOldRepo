package com.bugtracker.codeclan.bugtracker.controllers;

import com.bugtracker.codeclan.bugtracker.models.Bug;
import com.bugtracker.codeclan.bugtracker.models.User;
import com.bugtracker.codeclan.bugtracker.repositories.BugRepository;
import com.bugtracker.codeclan.bugtracker.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BugController {

    @Autowired
    BugRepository bugRepository;

    @GetMapping(value = "/bugs")
    public ResponseEntity<List<Bug>> getAllBugs(){
        return new ResponseEntity<>(bugRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/bugs/{id}")
    public ResponseEntity getBugById(@PathVariable Long id){
        return new ResponseEntity(bugRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/bugs")
    public ResponseEntity<Bug> postBug(@RequestBody Bug bug){
        bugRepository.save(bug);
        return new ResponseEntity<>(bug, HttpStatus.CREATED);
    }
}
