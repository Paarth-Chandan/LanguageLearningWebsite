package org.workspace.languagelearningbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.workspace.languagelearningbackend.model.Enrollment;

import java.util.List;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {

    //List<Enrollment> findByStudentSId(Long studentId);
}