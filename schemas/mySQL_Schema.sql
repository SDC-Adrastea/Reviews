-- CREATE DATABASE chat;

-- USE chat;

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   id int NOT NULL AUTO_INCREMENT,
--   userid int NOT NULL,
--   text varchar(200) NOT NULL,
--   roomname varchar(20),
--   PRIMARY KEY (ID)
-- );

-- /* Create other tables and define schemas for them here! */

-- CREATE TABLE users (
--   id int NOT NULL AUTO_INCREMENT,
--   username varchar(40) NOT NULL,
--   PRIMARY KEY (ID)
-- )

--  data get /reviews:

-- {
--   "product": "2",
--   "page": 0,
--   "count": 5,
--   "results": [
--     {
--       "review_id": 5,
--       "rating": 3,
--       "summary": "I'm enjoying wearing these shades",
--       "recommend": false,
--       "response": null,
--       "body": "Comfortable and practical.",
--       "date": "2019-04-14T00:00:00.000Z",
--       "reviewer_name": "shortandsweeet",
--       "helpfulness": 5,
--       "photos": [{
--           "id": 1,
--           "url": "urlplaceholder/review_5_photo_number_1.jpg"
--         },
--         {
--           "id": 2,
--           "url": "urlplaceholder/review_5_photo_number_2.jpg"
--         },
--         // ...
--       ]
--     },
--     {
--       "review_id": 3,
--       "rating": 4,
--       "summary": "I am liking these glasses",
--       "recommend": false,
--       "response": "Glad you're enjoying the product!",
--       "body": "They are very dark. But that's good because I'm in very sunny spots",
--       "date": "2019-06-23T00:00:00.000Z",
--       "reviewer_name": "bigbrotherbenjamin",
--       "helpfulness": 5,
--       "photos": [],
--     },
--     // ...
--   ]
-- }

--  metaData:

-- {
--   "product_id": "2",
--   "ratings": {
--     2: 1,
--     3: 1,
--     4: 2,
--     // ...
--   },
--   "recommended": {
--     0: 5
--     // ...
--   },
--   "characteristics": {
--     "Size": {
--       "id": 14,
--       "value": "4.0000"
--     },
--     "Width": {
--       "id": 15,
--       "value": "3.5000"
--     },
--     "Comfort": {
--       "id": 16,
--       "value": "4.0000"
--     },
--     // ...
-- }


CREATE DATABASE reviews;

USE reviews;

-------------------- review data -------------------

CREATE TABLE reviewData {
  id int NOT NULL AUTO_INCREMENT,
  product int NOT NULL,
  page int NOT NULL,
  count int NOT NULL,
  PRIMARY KEY (product)
};

CREATE TABLE results {
  id int NOT NULL AUTO_INCREMENT,
  review_id int NOT NULL,
  rating int NOT NULL,
  summary VARCHAR(200),
  recommended VARCHAR(10),
  response VARCHAR(200),
  body VARCHAR(200),
  date DATE(50),
  reviewer_name VARCHAR(50) NOT NULL,
  helpfulness VARCHAR(10)
  FOREIGN KEY (id) REFERENCES reviewData(product)
};

CREATE TABLE photos {
  id int NOT NULL AUTO_INCREMENT,
  url VARCHAR(250),
  FOREIGN KEY (id) REFERENCES results(review_id)
};

-------------------- meta data -------------------

CREATE TABLE metaData {
  id int NOT NULL AUTO_INCREMENT,
  product_id int NOT NULL,
  PRIMARY KEY (id)
};

CREATE TABLE recommended {
  id int NOT NULL AUTO_INCREMENT,
  rating int NOT NULL,
  FOREIGN KEY (id) REFERENCES metaData(product_id)
};

CREATE TABLE ratings {
  id int NOT NULL AUTO_INCREMENT,
  rating int NOT NULL,
  FOREIGN KEY (id) REFERENCES metaData(product_id)
};

CREATE TABLE characteristics {
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  FOREIGN KEY (id) REFERENCES metaData(product_id)
};

CREATE TABLE size {
  id int NOT NULL,
  value int,
  FOREIGN KEY (id) REFERENCES characteristics(id)
};

CREATE TABLE width {
  id int NOT NULL,
  value int,
  FOREIGN KEY (id) REFERENCES characteristics(id)
};

CREATE TABLE comfort {
  id int NOT NULL,
  value int,
  FOREIGN KEY (id) REFERENCES characteristics(id)
};

CREATE TABLE length {
  id int NOT NULL,
  value int,
  FOREIGN KEY (id) REFERENCES characteristics(id)
};

CREATE TABLE quality {
  id int NOT NULL,
  value int,
  FOREIGN KEY (id) REFERENCES characteristics(id)
};