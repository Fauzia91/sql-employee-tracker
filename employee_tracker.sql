CREATE TABLE `department` (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY (id)
) 

CREATE TABLE `role` (
  id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(30) NOT NULL,
  salary decimal(10,0) NOT NULL,
  department_id int(11) NOT NULL,
   PRIMARY KEY (id)
) 

CREATE TABLE `employee` (
  id int(11) NOT NULL AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id int(11) NOT NULL,
  manager_id int(11) NOT NULL,
   PRIMARY KEY (id)
) 
