package com.bugtracker.codeclan.bugtracker.repositories;

import com.bugtracker.codeclan.bugtracker.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
