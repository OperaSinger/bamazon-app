DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE inventory (
  item_id INT(5) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(5,2) NULL,
  stock_quantity INT(10) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO inventory (product_name, department_name, price, stock_quantity)
VALUES ("Furbee", "Toys", 4.50, 234);
INSERT INTO inventory (product_name, department_name, price, stock_quantity)
VALUES ("loofah", "Bath", 2.95, 254);
INSERT INTO inventory (product_name, department_name, price, stock_quantity)
VALUES ("Papasan Chair", "Furniture", 195.99, 23);
INSERT INTO inventory (product_name, department_name, price, stock_quantity)
VALUES ("Bleach (Gallon)", "Household", 2.45, 123);
INSERT INTO inventory (product_name, department_name, price, stock_quantity)
VALUES ("Mickey Telephone", "Electronics", 34.95, 34);
INSERT INTO inventory (product_name, department_name, price, stock_quantity)
VALUES ("Knife Set", "Kitchen", 49.95, 25);
INSERT INTO inventory (product_name, department_name, price, stock_quantity)
VALUES ("Crappy Schwinn Bicycle", "Sports", 123.95, 4);
INSERT INTO inventory (product_name, department_name, price, stock_quantity)
VALUES ("Toilet Paper (18 Giant Rolls)", "Household", 18.95, 48);
INSERT INTO inventory (product_name, department_name, price, stock_quantity)
VALUES ("Step Stool", "Furniture", 38.95, 23);
INSERT INTO inventory (product_name, department_name, price, stock_quantity)
VALUES ("Swimsuit, Mens - blue", "Clothing", 32.95, 30);

