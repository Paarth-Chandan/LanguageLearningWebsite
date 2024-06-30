package org.workspace.languagelearningbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.workspace.languagelearningbackend.model.Student;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {

    Optional<Student> findByEmail(String email);

    Student findByEmailAndPassword(String email, String password);
}