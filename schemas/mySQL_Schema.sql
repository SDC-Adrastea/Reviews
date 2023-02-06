DROP DATABASE reviews;

CREATE DATABASE IF NOT EXISTS reviews;

USE reviews;

CREATE TABLE IF NOT EXISTS results (
  id INT NOT NULL,
  product_id INT,
  rating INT(20),
  date BIGINT,
  summary VARCHAR(200),
  body VARCHAR(500),
  recommend VARCHAR(100),
  reported VARCHAR(100),
  reviewer_name VARCHAR(100),
  reviewer_email VARCHAR(100),
  response VARCHAR(200),
  helpfulness INT
);

LOAD DATA INFILE '/Users/joshkrebs/SDC-Atelier/Reviews/data/reviews.csv'
INTO TABLE results
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

CREATE INDEX id_of_product ON results(product_id);

CREATE TABLE IF NOT EXISTS photos (
  id INT(10),
  review_id INT(10),
  url VARCHAR(500)
);

LOAD DATA INFILE '/Users/joshkrebs/SDC-Atelier/Reviews/data/reviews_photos.csv'
INTO TABLE photos
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

CREATE INDEX p_id ON photos(review_id);

CREATE TABLE IF NOT EXISTS characteristics_reviews (
  id INT,
  characteristic_id INT,
  review_id INT,
  value INT
);

LOAD DATA INFILE '/Users/joshkrebs/SDC-Atelier/Reviews/data/characteristic_reviews.csv'
INTO TABLE characteristics_reviews
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

CREATE TABLE IF NOT EXISTS characteristics (
  id INT,
  product_id INT,
  name VARCHAR(50)
);

LOAD DATA INFILE '/Users/joshkrebs/SDC-Atelier/Reviews/data/characteristics.csv'
INTO TABLE characteristics
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

CREATE INDEX pc_id ON characteristics(product_id);

ALTER TABLE results MODIFY COLUMN id INT PRIMARY KEY NOT NULL AUTO_INCREMENT;

ALTER TABLE characteristics_reviews ADD INDEX char_rev_idx (characteristic_id);


