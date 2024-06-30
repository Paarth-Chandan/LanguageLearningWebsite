package org.workspace.languagelearningbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.workspace.languagelearningbackend.model.Course;
import org.workspace.languagelearningbackend.model.CourseCompletion;
import org.workspace.languagelearningbackend.model.Student;
import org.workspace.languagelearningbackend.repository.CourseCompletionRepository;
import org.workspace.languagelearningbackend.repository.CourseRepository;
import org.workspace.languagelearningbackend.repository.StudentRepository;

import java.util.List;

@RestController
@RequestMapping("/api/courseCompletion")
public class CourseCompletionController {
    @Autowired
    private CourseCompletionRepository courseCompletionRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping("/{studentId}/{courseId}")
    public ResponseEntity<CourseCompletion> getCourseCompletion(@PathVariable Long studentId, @PathVariable Long courseId) {
        // Fetch Student and Course objects
        Student student = studentRepository.findById(studentId).orElse(null);
        Course course = courseRepository.findById(courseId).orElse(null);

        // Check if both Student and Course are found
        if (student != null && course != null) {
            // Call repository method with objects
            CourseCompletion courseCompletion = courseCompletionRepository.findByStudentAndCourse(student, course);
            if (courseCompletion != null) {
                return ResponseEntity.ok(courseCompletion);
            }
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/update")
    public ResponseEntity<CourseCompletion> updateCourseCompletion(@RequestBody CourseCompletion courseCompletionRequest) {
        // Fetch Student and Course objects
        Student student = studentRepository.findById(courseCompletionRequest.getStudent().getId()).orElse(null);
        Course course = courseRepository.findById(courseCompletionRequest.getCourse().getId()).orElse(null);

        if (student == null || course == null) {
            return ResponseEntity.badRequest().build();
        }

        // Find existing CourseCompletion
        CourseCompletion courseCompletion = courseCompletionRepository.findByStudentAndCourse(student, course);
        if (courseCompletion == null) {
            courseCompletion = new CourseCompletion();
            courseCompletion.setStudent(student);
            courseCompletion.setCourse(course);
            courseCompletion.setVideosCompleted(1);
        } else {
            courseCompletion.setVideosCompleted(courseCompletion.getVideosCompleted() + 1);
        }

        courseCompletionRepository.save(courseCompletion);

        return ResponseEntity.ok(courseCompletion);
    }

    @GetMapping
    public List<CourseCompletion> getAllCourseCompletions() {
        return courseCompletionRepository.findAll();
    }
}
