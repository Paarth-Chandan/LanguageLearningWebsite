package org.workspace.languagelearningbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.workspace.languagelearningbackend.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
}