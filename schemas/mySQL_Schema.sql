CREATE DATABASE reviews;

USE reviews;

CREATE TABLE review_data (
  id INT NOT NULL AUTO_INCREMENT,
  product int NOT NULL,
  page int NOT NULL,
  count int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE results (
  id int NOT NULL AUTO_INCREMENT,
  review_id int NOT NULL,
  rating int NOT NULL,
  summary VARCHAR(200),
  recommended VARCHAR(10),
  response VARCHAR(200),
  body VARCHAR(200),
  post_date VARCHAR(50),
  reviewer_name VARCHAR(50),
  helpfulness VARCHAR(10),
  product_ref INT,
  PRIMARY KEY (id),
  FOREIGN KEY (product_ref) REFERENCES review_data(id)

);

CREATE TABLE photos (
  id int NOT NULL AUTO_INCREMENT,
  url VARCHAR(250),
  results_ref INT,
  PRIMARY KEY (id),
  FOREIGN KEY (results_ref) REFERENCES results(id)
);





CREATE TABLE meta_data (
  id int NOT NULL AUTO_INCREMENT,
  product_id int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE recommended (
  rating int NOT NULL,
  meta_ref INT,
  FOREIGN KEY (meta_ref) REFERENCES meta_data(id)
);

CREATE TABLE ratings (
  rating int NOT NULL,
  meta_ref INT,
  FOREIGN KEY (meta_ref) REFERENCES meta_data(id)
);

CREATE TABLE characteristics (
  id int NOT NULL AUTO_INCREMENT,
  meta_ref INT,
  PRIMARY KEY (id),
  FOREIGN KEY (meta_ref) REFERENCES meta_data(id)
);

CREATE TABLE size (
  char_ref int NOT NULL,
  value int,
  FOREIGN KEY (char_ref) REFERENCES characteristics(id)
);

CREATE TABLE width (
  char_ref int NOT NULL,
  value int,
  FOREIGN KEY (char_ref) REFERENCES characteristics(id)
);

CREATE TABLE comfort (
  char_ref int NOT NULL,
  value int,
  FOREIGN KEY (char_ref) REFERENCES characteristics(id)
);

CREATE TABLE length (
  char_ref int NOT NULL,
  value int,
  FOREIGN KEY (char_ref) REFERENCES characteristics(id)
);

CREATE TABLE quality (
  char_ref int NOT NULL,
  value int,
  FOREIGN KEY (char_ref) REFERENCES characteristics(id)
);