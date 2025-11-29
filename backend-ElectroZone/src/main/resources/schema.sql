CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price DOUBLE PRECISION,
  stock INT,
  category VARCHAR(255)
);
