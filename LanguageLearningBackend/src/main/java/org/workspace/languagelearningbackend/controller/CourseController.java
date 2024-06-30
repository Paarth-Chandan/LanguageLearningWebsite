package org.workspace.languagelearningbackend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.workspace.languagelearningbackend.model.Course;
import org.workspace.languagelearningbackend.repository.CourseRepository;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping("/courses/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
        Optional<Course> courseOptional = courseRepository.findById(id);
        return courseOptional.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
