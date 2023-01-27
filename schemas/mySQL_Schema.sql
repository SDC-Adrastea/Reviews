CREATE DATABASE IF NOT EXISTS reviews;

USE reviews;

-- reviews.csv:

-- id,product_id,rating,date,summary,body,recommend,reported,reviewer_name,reviewer_email,response,helpfulness
-- 1,1,5,1596080481467,"This product was great!","I really did or did not like this product based on whether it was sustainably sourced.  Then I found out that its made from nothing at all.",true,false,"funtime","first.last@gmail.com",null,8

-- characteristic_reviews.csv:

-- id,characteristic_id,review_id,value
-- 1,1,1,4
-- 2,2,1,3
-- 3,3,1,5

-- reviews_photos.csv:

-- id,review_id,url
-- 1,5,"https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
-- 2,5,"https://images.unsplash.com/photo-1561693532-9ff59442a7db?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"

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

CREATE INDEX id_of_product ON results(product_id);

CREATE TABLE IF NOT EXISTS photos (
  id INT(10),
  review_id INT(10),
  url VARCHAR(500)
);

CREATE INDEX p_id ON photos(review_id);

CREATE TABLE IF NOT EXISTS characteristics_reviews (
  id INT,
  characteristic_id INT,
  review_id INT,
  value INT
);

CREATE TABLE IF NOT EXISTS characteristics (
  id INT,
  product_id INT,
  name VARCHAR(50)
);

CREATE INDEX pc_id ON characteristics(product_id);

