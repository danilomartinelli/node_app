CREATE DATABASE IF NOT EXISTS node_app;

USE node_app;

CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);