CREATE DATABASE products_db;

USE products_db;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL
);


INSERT INTO products (
    created_by,
    description,
    quantity,
    price
)
VALUES (
    'Igor',
    'Mouse Gamer',
    10,
    199.90
);