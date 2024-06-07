CREATE DATABASE IF NOT EXISTS `pawpaw`;

USE `pawpaw`;


-- Create users publications
CREATE TABLE `pawpaw`.`publications`
(
    `id` int NOT NULL auto_increment,
    `name` varchar(50),
    `email` varchar(60),
    `mobile` bigint(10),
    `created_at` timestamp,
    `updated_at` timestamp, 
    PRIMARY KEY (id)
);

CREATE TABLE `pawpaw`.`comments`
(
    `id` int NOT NULL auto_increment,
    `id_publication` varchar(50),
    `comment` varchar(600),
    `created_at` timestamp,
    PRIMARY KEY (id)
);

CREATE TABLE `pawpaw`.`associations`
(
    `id` int NOT NULL auto_increment,
    `name` varchar(50),
    `email` varchar(60),
    `mobile` bigint(10),
    `localisation` varchar(60),
    `created_at` timestamp,
    `updated_at` timestamp, 
    PRIMARY KEY (id)
);


CREATE TABLE `pawpaw`.`veterinarians`
(
    `id` int NOT NULL auto_increment,
    `name` varchar(50),
    `email` varchar(60),
    `mobile` bigint(10),
    `localisation` varchar(60),
    `created_at` timestamp,
    `updated_at` timestamp, 
    PRIMARY KEY (id)
);


