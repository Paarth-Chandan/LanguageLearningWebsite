CREATE DATABASE IF NOT EXISTS LanguageLearningDB;
USE LanguageLearningDB;

DROP TABLE IF EXISTS STUDENT;
CREATE TABLE STUDENT(
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) DEFAULT NULL,
    email VARCHAR(50) DEFAULT NULL,
    password VARCHAR(50) DEFAULT NULL,
    PRIMARY KEY(id)
);

DROP TABLE IF EXISTS COURSE;
CREATE TABLE COURSE (
    id BIGINT NOT NULL AUTO_INCREMENT,
    course_name VARCHAR(100) DEFAULT NULL,
    tutor VARCHAR(255),
    date DATE,
    thumb VARCHAR(255),
    description TEXT DEFAULT NULL,
    PRIMARY KEY(id)
);

DROP TABLE IF EXISTS ENROLLMENT;
CREATE TABLE ENROLLMENT (
    id BIGINT NOT NULL AUTO_INCREMENT,
    s_id BIGINT NOT NULL,
    c_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (s_id) REFERENCES STUDENT(id),
    FOREIGN KEY (c_id) REFERENCES COURSE(id)
);

DROP TABLE IF EXISTS course_completion;
CREATE TABLE course_completion (
    id BIGINT NOT NULL AUTO_INCREMENT,
    s_id BIGINT NOT NULL,
    c_id BIGINT NOT NULL,
    videos_completed INT DEFAULT 0,
    total_videos INT DEFAULT 0,
    PRIMARY KEY (id),
    FOREIGN KEY (s_id) REFERENCES STUDENT(id),
    FOREIGN KEY (c_id) REFERENCES COURSE(id)
);

-- Inserting data into COURSE table
INSERT INTO COURSE (course_name, tutor, date, thumb, description) VALUES
('HTML', 'john deo', '2022-10-21', '/images/thumb-1.png', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.'),
('CSS', 'john deo', '2022-10-21', '/images/thumb-2.png', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.'),
('JS', 'john deo', '2022-10-21', '/images/thumb-3.png', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.'),
('Bootstrap', 'john deo', '2022-10-21', '/images/thumb-4.png', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.'),
('JQuery', 'john deo', '2022-10-21', '/images/thumb-5.png', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.'),
('SASS', 'john deo', '2022-10-21', '/images/thumb-6.png', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.'),
('PHP', 'john deo', '2022-10-21', '/images/thumb-7.png', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.'),
('MySQL', 'john deo', '2022-10-21', '/images/thumb-8.png', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.'),
('React', 'john deo', '2022-10-21', '/images/thumb-9.png', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.');

-- Select statements to view the data
SELECT * FROM STUDENT;
SELECT * FROM COURSE;
SELECT * FROM ENROLLMENT;
SELECT * FROM course_completion;