CREATE DATABASE `library-api`;

USE `library-api`;

CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `author` varchar(100) NOT NULL,
  `edition` int NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO `books` (`title`, `author`, `edition`) VALUES
('The lord of rings', 'J.R.R Tolkien', 1),
('harry Potter', 'J. K. Rowling', 1),
('The Hunger Games', 'Suzanne Collins', 1);


