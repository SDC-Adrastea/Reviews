DROP database review_test;

CREATE DATABASE IF NOT EXISTS review_test;

USE review_test;

-- TRUNCATE TABLE IF EXISTS test;

CREATE TABLE IF NOT EXISTS test (
  id INT AUTO_INCREMENT,
  product_id INT,
  name VARCHAR(50),
  PRIMARY KEY (id)
);

LOAD DATA INFILE '/Users/joshkrebs/SDC-Atelier/Reviews/data/test.csv'
INTO TABLE test
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

CREATE TABLE IF NOT EXISTS test_two (
    id INT AUTO_INCREMENT,
    product_id INT,
    name VARCHAR(50),
    PRIMARY KEY (id)
);

LOAD DATA INFILE '/Users/joshkrebs/SDC-Atelier/Reviews/data/test.csv'
INTO TABLE test_two
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

ALTER TABLE test_two ADD INDEX char_rev_idx (product_id);

