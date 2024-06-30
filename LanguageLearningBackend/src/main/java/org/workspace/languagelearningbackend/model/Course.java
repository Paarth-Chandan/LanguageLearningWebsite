package org.workspace.languagelearningbackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "COURSE")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "tutor")
    private String tutor;

    @Column(name = "date")
    private Date date;

    @Column(name = "thumb")
    private String thumb;

    @Column(name = "description")
    private String description;

    public Course(Long id) {
        this.id = id;
    }
}

