package org.workspace.languagelearningbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.workspace.languagelearningbackend.model.Course;
import org.workspace.languagelearningbackend.model.CourseCompletion;
import org.workspace.languagelearningbackend.model.Student;

@Repository
public interface CourseCompletionRepository extends JpaRepository<CourseCompletion, Long> {

    CourseCompletion findByStudentAndCourse(Student student, Course course);
}

